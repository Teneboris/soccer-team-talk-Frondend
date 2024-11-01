import {Component, inject, Inject} from '@angular/core';
import {TrainingService} from "../../services/training.service";
import {TrainingModel} from "../../models/taining.model";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-dialog-content-open-training-details',
  templateUrl: './dialog-content-training-details.component.html',
  styleUrls: ['./dialog-content-training-details.component.css']
})
export class DialogContentTrainingDetailsComponent {

  readonly dialog = inject(MatDialog);

  constructor(private trainingService: TrainingService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) public data: any
              ) {}

  ngOnInit(): void {


  }

/*  getTrainingById(trainingId: string | undefined) {

    this.trainingService.getTrainingById(trainingId).subscribe(
      (data: TrainingModel) => {
        this.data.id = data;
      },
      error => {
        console.error('Error fetching training details:', error);
      }
    );
  }*/

  startConversation() {
    //this.router.navigate([`/training/message/${this.data.id}`]);
    this.router.navigate([`/message`]);
  }

  deleteTraining(trainingId: number): void {
    this.trainingService.deleteTraining(trainingId).subscribe(
      response => {
        console.log('Training deleted:', response);
        this.trainingService.getTrainings();
      },
      error => {
        console.error('Error deleting training:', error);
      }
    );
  }

  updateTraining(updatedTraining: TrainingModel): void {
    this.trainingService.updateTraining(updatedTraining).subscribe(
      response => {
        console.log('Training updated:', response);
        // After updating, refresh the list
        this.trainingService.getTrainings();
      },
      error => {
        console.error('Error updating training:', error);
      }
    );
  }
}
