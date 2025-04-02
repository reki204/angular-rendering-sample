import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostService, Post } from '../post.service';
import { RenderInfoService } from '../render-info.service';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './post-detail.component.html',
})
export class PostDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly renderInfoService = inject(RenderInfoService);
  private readonly postService = inject(PostService);

  post: Post | null = null;
  renderingMode = this.renderInfoService.getRenderingMode();
  fetchTime = new Date();
  isServer = this.renderInfoService.isServer();

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.postService.getPostById(Number(postId)).subscribe((data) => {
        this.post = data;
      });
    }
  }
}
