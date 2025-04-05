import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SSGCatComponent } from './ssg/cat.component';
import { SSRCatComponent } from './ssr/cat.component';
import { ISRCatComponent } from './isr/cat.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ssg/cats', component: SSGCatComponent },
  { path: 'ssr/cats', component: SSRCatComponent },
  {
    path: 'isr/cats',
    component: ISRCatComponent,
    data: {
      revalidate: 10,
    },
  },
];
