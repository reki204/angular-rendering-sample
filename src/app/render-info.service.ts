import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

export type RenderingMode = 'client' | 'server' | 'prerendered' | 'ISR';

@Injectable({
  providedIn: 'root',
})
export class RenderInfoService {
  private readonly platformId = inject(PLATFORM_ID);
  private renderStartTime = Date.now();

  public getRenderingMode(): RenderingMode {
    if (this.isServer()) {
      return 'server';
    } else if (isPlatformBrowser(this.platformId)) {
      const path = window.location.pathname;
      if (path.startsWith('/ssg') && !path.includes('/', 6)) {
        return 'prerendered';
      } else if (path.startsWith('/ssr')) {
        return 'server';
      } else if (path.startsWith('/isr')) {
        return 'ISR';
      }
      return 'client';
    }
    return 'client';
  }

  // レンダリング時間を計算
  public getRenderTime(): number {
    return Date.now() - this.renderStartTime;
  }

  public isServer(): boolean {
    return isPlatformServer(this.platformId);
  }

  public isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
