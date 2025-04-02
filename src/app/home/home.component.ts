import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RenderInfoService, RenderingMode } from '../render-info.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private readonly renderInfoService = inject(RenderInfoService);
  renderingMode = this.renderInfoService.getRenderingMode();
}
