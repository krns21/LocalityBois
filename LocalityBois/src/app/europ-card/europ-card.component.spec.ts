import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropCardComponent } from './europ-card.component';

describe('EuropCardComponent', () => {
  let component: EuropCardComponent;
  let fixture: ComponentFixture<EuropCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuropCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EuropCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
