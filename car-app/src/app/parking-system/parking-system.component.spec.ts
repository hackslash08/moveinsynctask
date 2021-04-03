import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSystemComponent } from './parking-system.component';

describe('ParkingSystemComponent', () => {
  let component: ParkingSystemComponent;
  let fixture: ComponentFixture<ParkingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
