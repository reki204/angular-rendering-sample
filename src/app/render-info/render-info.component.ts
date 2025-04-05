import { Component, inject, OnInit } from '@angular/core';
import { RenderInfoService, RenderingMode } from '../render-info.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-render-info',
  imports: [CommonModule],
  templateUrl: './render-info.component.html',
})
export class RenderInfoComponent implements OnInit {
  private readonly renderInfoService = inject(RenderInfoService);
  renderingMode: RenderingMode = 'client';
  renderTime: number = 0;
  isHydrated: boolean = false;

  ngOnInit() {
    this.renderingMode = this.renderInfoService.getRenderingMode();
    this.renderTime = this.renderInfoService.getRenderTime();

    // ブラウザの場合は、ハイドレーションの完了を検出
    if (this.renderInfoService.isBrowser()) {
      setTimeout(() => {
        this.isHydrated = true;
      }, 0);
    }
  }

  public isServer(): boolean {
    return this.renderInfoService.isServer();
  }

  // レンダリングモードに応じた境界線の色を設定
  public getBorderClass() {
    switch (this.renderingMode) {
      case 'client':
        return 'border-blue-500';
      case 'server':
        return 'border-green-500';
      case 'prerendered':
        return 'border-amber-500';
      case 'ISR':
        return 'border-purple-500';
      default:
        return 'border-gray-500';
    }
  }
}
