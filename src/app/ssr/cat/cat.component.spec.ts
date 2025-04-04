import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSRCatComponent } from './cat.component';

describe('CatComponent', () => {
  let component: SSRCatComponent;
  let fixture: ComponentFixture<SSRCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SSRCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSRCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
