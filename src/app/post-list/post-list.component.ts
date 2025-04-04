import {
  Component,
  inject,
  makeStateKey,
  OnInit,
  TransferState,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService, Post } from '../post.service';
import { RenderInfoService } from '../render-info.service';

const GENERATED_AT_KEY = makeStateKey<number>('generatedAt');

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
  private readonly postService = inject(PostService);
  private readonly renderInfoService = inject(RenderInfoService);
  private readonly transferState = inject(TransferState);

  posts: Post[] = [];
  renderingMode = this.renderInfoService.getRenderingMode();
  isServer = this.renderInfoService.isServer();
  generatedAt!: number;

  ngOnInit() {
    if (this.transferState.hasKey(GENERATED_AT_KEY)) {
      this.generatedAt = this.transferState.get(GENERATED_AT_KEY, 0);
    } else {
      this.generatedAt = new Date().getTime();
      this.transferState.set(GENERATED_AT_KEY, this.generatedAt);
    }

    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
