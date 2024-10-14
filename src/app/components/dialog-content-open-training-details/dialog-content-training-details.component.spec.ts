import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentTrainingDetailsComponent } from './dialog-content-training-details.component';

describe('DialogContentOpenTrainingDetailsComponent', () => {
  let component: DialogContentTrainingDetailsComponent;
  let fixture: ComponentFixture<DialogContentTrainingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentTrainingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogContentTrainingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
