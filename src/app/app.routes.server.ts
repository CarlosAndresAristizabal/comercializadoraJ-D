import { RenderMode, ServerRoute } from '@angular/ssr';
// IDs de productos definidos en products.ts
const productIds = [1, 2, 3, 4, 5, 6];

export const serverRoutes: ServerRoute[] = [
  {
    path: 'products/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => Promise.resolve(productIds.map(id => ({ id: id.toString() })))
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
