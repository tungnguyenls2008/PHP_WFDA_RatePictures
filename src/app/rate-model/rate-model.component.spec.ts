import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateModelComponent } from './rate-model.component';

describe('RateModelComponent', () => {
  let component: RateModelComponent;
  let fixture: ComponentFixture<RateModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
