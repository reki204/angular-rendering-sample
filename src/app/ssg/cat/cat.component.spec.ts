import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSGCatComponent } from './cat.component';

describe('CatComponent', () => {
  let component: SSGCatComponent;
  let fixture: ComponentFixture<SSGCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SSGCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSGCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
