import {
  AngularNodeAppEngine,
  CommonEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ISRHandler } from '@rx-angular/isr/server';
import bootstrap from './main.server';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const angularApp = new AngularNodeAppEngine();

const commonEngine = new CommonEngine();
const allowedQueryParams = ['page'];

const isr = new ISRHandler({
  indexHtml,
  invalidateSecretToken: 'MY_TOKEN',
  enableLogging: true,
  serverDistFolder,
  browserDistFolder,
  bootstrap,
  commonEngine,
  allowedQueryParams,
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

// ISR のキャッシュ無効化エンドポイント
app.post('/api/invalidate', async (req, res) => await isr.invalidate(req, res));

// '/isr/cats'の GETリクエストをISRHandlerで処理する。
// まずキャッシュからの提供を試み、なければSSRでレンダリングしてキャッシュに保存する。
app.get(
  '/isr/cats',
  async (req, res, next) => await isr.serveFromCache(req, res, next),
  async (req, res, next) => await isr.render(req, res, next)
);

app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next()
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
