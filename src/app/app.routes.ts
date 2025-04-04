import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SSGCatComponent } from './ssg/cat/cat.component';
import { SSRCatComponent } from './ssr/cat/cat.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ssg/cats', component: SSGCatComponent },
  { path: 'ssr/cats', component: SSRCatComponent },
];
