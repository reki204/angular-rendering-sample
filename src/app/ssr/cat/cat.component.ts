import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Cat, CatService } from '../../cat.service';
import { RenderInfoService } from '../../render-info.service';

@Component({
  selector: 'app-cat',
  imports: [CommonModule],
  templateUrl: './cat.component.html',
})
export class SSRCatComponent {
  private readonly catService = inject(CatService);
  private readonly renderInfoService = inject(RenderInfoService);

  cats: Cat[] = [];
  renderingMode = this.renderInfoService.getRenderingMode();
  isServer = this.renderInfoService.isServer();
  fetchTime = new Date();

  ngOnInit() {
    this.fetchCatImage();
  }

  public fetchCatImage() {
    this.catService.getPhotos().subscribe((data) => {
      this.cats = data;
    });
  }
}
