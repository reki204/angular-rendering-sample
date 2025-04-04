import { Component, inject, OnInit } from '@angular/core';
import { Photo, PhotoService } from '../photo.service';
import { RenderInfoService } from '../render-info.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo',
  imports: [CommonModule],
  templateUrl: './photo.component.html',
})
export class PhotoComponent implements OnInit {
  private readonly photoService = inject(PhotoService);
  private readonly renderInfoService = inject(RenderInfoService);
  photos: Photo[] = [];
  renderingMode = this.renderInfoService.getRenderingMode();
  isServer = this.renderInfoService.isServer();
  fetchTime = new Date();

  ngOnInit() {
    this.photoService.getPhotos().subscribe((data) => {
      this.photos = data;
    });
  }
}
