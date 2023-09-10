import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdtedPatientComponent } from './updted-patient.component';

describe('UpdtedPatientComponent', () => {
  let component: UpdtedPatientComponent;
  let fixture: ComponentFixture<UpdtedPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdtedPatientComponent]
    });
    fixture = TestBed.createComponent(UpdtedPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
