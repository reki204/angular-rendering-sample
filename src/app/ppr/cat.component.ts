import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Cat, CatService } from '../cat.service';
import { RenderInfoService } from '../render-info.service';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat.component.html',
})
export class PPRCatComponent implements OnInit {
  private readonly catService = inject(CatService);
  private readonly renderInfoService = inject(RenderInfoService);

  cats: Cat[] = [];
  renderingMode = this.renderInfoService.getRenderingMode();

  ngOnInit() {
    if (this.renderInfoService.isBrowser()) {
      this.fetchCatImage();
    }
  }

  public fetchCatImage() {
    this.catService.getCats().subscribe((data) => {
      this.cats = data;
    });
  }
}
