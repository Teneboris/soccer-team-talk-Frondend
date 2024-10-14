import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentAddGameComponent } from './dialog-content-add-game.component';

describe('DialogContentAddGameComponent', () => {
  let component: DialogContentAddGameComponent;
  let fixture: ComponentFixture<DialogContentAddGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentAddGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogContentAddGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
