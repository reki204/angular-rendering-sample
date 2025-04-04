import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './blog-detail/post-detail.component';
import { HomeComponent } from './home/home.component';
import { PhotoComponent } from './photo/photo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'photos', component: PhotoComponent },
];
