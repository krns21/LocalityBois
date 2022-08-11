import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacupCardComponent } from './facup-card.component';

describe('FacupCardComponent', () => {
  let component: FacupCardComponent;
  let fixture: ComponentFixture<FacupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacupCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
