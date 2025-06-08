import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PPRCatComponent } from './cat.component';

describe('PPRCatComponent', () => {
  let component: PPRCatComponent;
  let fixture: ComponentFixture<PPRCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PPRCatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PPRCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
