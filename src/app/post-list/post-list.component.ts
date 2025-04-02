import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService, Post } from '../post.service';
import { RenderInfoService } from '../render-info.service';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
  private readonly postService = inject(PostService);
  private readonly renderInfoService = inject(RenderInfoService);

  posts: Post[] = [];
  renderingMode = this.renderInfoService.getRenderingMode();
  isServer = this.renderInfoService.isServer();
  generatedAt = new Date();

  ngOnInit() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
