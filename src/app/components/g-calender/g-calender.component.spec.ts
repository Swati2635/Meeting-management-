import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GCalenderComponent } from './g-calender.component';

describe('GCalenderComponent', () => {
  let component: GCalenderComponent;
  let fixture: ComponentFixture<GCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GCalenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
