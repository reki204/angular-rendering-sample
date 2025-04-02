import { TestBed } from '@angular/core/testing';

import { RenderInfoService } from './render-info.service';

describe('RenderInfoService', () => {
  let service: RenderInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
