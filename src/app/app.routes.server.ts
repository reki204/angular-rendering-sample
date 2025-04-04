import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Client,
  },
  {
    path: 'posts',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'posts/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'photos',
    renderMode: RenderMode.Server,
  },
];
