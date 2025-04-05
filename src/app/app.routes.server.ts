import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Client,
  },
  {
    path: 'ssg/cats',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'ssr/cats',
    renderMode: RenderMode.Server,
  },
  {
    path: 'isr/cats',
    renderMode: RenderMode.Prerender,
  },
];
