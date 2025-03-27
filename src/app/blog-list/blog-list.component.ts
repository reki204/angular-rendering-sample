import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogPost, BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.component.html',
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = [];

  private blogService = inject(BlogService);

  ngOnInit() {
    this.posts = this.blogService.getPosts();
  }
}
