import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  makeStateKey,
  TransferState,
} from '@angular/core';
import { Cat, CatService } from '../cat.service';
import { RenderInfoService } from '../render-info.service';

const CAT_KEY = makeStateKey<Cat[]>('cats');
const GENERATED_AT_KEY = makeStateKey<number>('generatedAt');

@Component({
  selector: 'app-cat',
  imports: [CommonModule],
  templateUrl: './cat.component.html',
})
export class ISRCatComponent implements OnInit {
  private readonly catService = inject(CatService);
  private readonly renderInfoService = inject(RenderInfoService);
  private readonly transferState = inject(TransferState);

  cats: Cat[] = [];
  generatedAt!: number;
  renderingMode = this.renderInfoService.getRenderingMode();
  isServer = this.renderInfoService.isServer();

  ngOnInit() {
    if (
      this.transferState.hasKey(GENERATED_AT_KEY) &&
      this.transferState.hasKey(CAT_KEY)
    ) {
      this.generatedAt = this.transferState.get(GENERATED_AT_KEY, 0);
      this.cats = this.transferState.get(CAT_KEY, []);
      // 一度読み込んだらTransferStateの値は削除しておく
      this.transferState.remove(GENERATED_AT_KEY);
      this.transferState.remove(CAT_KEY);
    } else {
      this.generatedAt = new Date().getTime();
      this.catService.getCats().subscribe((data) => {
        this.cats = data;
      });
    }
  }

  public fetchCatImage() {
    this.catService.getCats().subscribe((data) => {
      this.cats = data;
      this.generatedAt = new Date().getTime();
    });
  }
}
