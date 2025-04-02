import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './blog-detail/post-detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailComponent },
];
