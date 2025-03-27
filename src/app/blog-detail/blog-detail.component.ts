import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogPost, BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.post = this.blogService.getPostById(postId);
    }
  }
}
