import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISRCatComponent } from './cat.component';

describe('CatComponent', () => {
  let component: ISRCatComponent;
  let fixture: ComponentFixture<ISRCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ISRCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ISRCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
