import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoDetail } from './auto-detail';

describe('AutoDetail', () => {
  let component: AutoDetail;
  let fixture: ComponentFixture<AutoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(AutoDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
