import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostService, Post } from '../post.service';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './post-detail.component.html',
})
export class PostDetailComponent implements OnInit {
  post: Post | null = null;

  private route = inject(ActivatedRoute);
  private postService = inject(PostService);

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.postService.getPostById(Number(postId)).subscribe((data) => {
        this.post = data;
      });
    }
  }
}
