import {
  Component,
  inject,
  OnInit,
  makeStateKey,
  TransferState,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cat, CatService } from '../cat.service';
import { RenderInfoService } from '../render-info.service';

const CAT_KEY = makeStateKey<Cat[]>('cats');
const GENERATED_AT_KEY = makeStateKey<number>('generatedAt');

@Component({
  selector: 'app-cat',
  imports: [CommonModule],
  templateUrl: './cat.component.html',
})
export class SSGCatComponent implements OnInit {
  private readonly catService = inject(CatService);
  private readonly renderInfoService = inject(RenderInfoService);
  private readonly transferState = inject(TransferState);

  cats: Cat[] = [];
  renderingMode = this.renderInfoService.getRenderingMode();
  isServer = this.renderInfoService.isServer();
  generatedAt!: number;

  ngOnInit() {
    // 生成時刻を取得またはセット
    if (this.transferState.hasKey(GENERATED_AT_KEY)) {
      this.generatedAt = this.transferState.get(GENERATED_AT_KEY, 0);
      this.transferState.remove(GENERATED_AT_KEY);
    } else {
      this.generatedAt = new Date().getTime();
      if (this.isServer) {
        this.transferState.set(GENERATED_AT_KEY, this.generatedAt);
      }
    }

    // 猫画像データの取得
    if (this.transferState.hasKey(CAT_KEY)) {
      this.cats = this.transferState.get(CAT_KEY, []);
      this.transferState.remove(CAT_KEY);
    } else {
      this.catService.getCats().subscribe((data) => {
        this.cats = data;
        if (this.isServer) {
          this.transferState.set(CAT_KEY, data);
        }
      });
    }
  }

  public fetchCatImage() {
    this.catService.getCats().subscribe((data) => {
      this.cats = data;
    });
  }
}
