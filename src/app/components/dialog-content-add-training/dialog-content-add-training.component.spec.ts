import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentAddTrainingComponent } from './dialog-content-add-training.component';

describe('DialogContentAddTrainingComponent', () => {
  let component: DialogContentAddTrainingComponent;
  let fixture: ComponentFixture<DialogContentAddTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentAddTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogContentAddTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
