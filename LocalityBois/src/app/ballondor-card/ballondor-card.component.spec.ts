import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallondorCardComponent } from './ballondor-card.component';

describe('BallondorCardComponent', () => {
  let component: BallondorCardComponent;
  let fixture: ComponentFixture<BallondorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallondorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BallondorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
