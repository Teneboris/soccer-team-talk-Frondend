import { Component } from '@angular/core';
import {TrainingService} from "../../services/training.service";
import {TrainingModel} from "../../models/taining.model";

@Component({
  selector: 'app-dialog-content-open-training-details',
  templateUrl: './dialog-content-training-details.component.html',
  styleUrls: ['./dialog-content-training-details.component.css']
})
export class DialogContentTrainingDetailsComponent {

  trainings: TrainingModel[] = [];

  constructor(private trainingService: TrainingService) {
  }

  onSubmit(){}

  getTrainingDetails() {
    this.trainingService.getTrainings().subscribe();
  }

  deleteTraining(){}

  updateTraining(){}

  outPutFunction(){
    for(let value of this.trainings.values()){
      console.log('just to check the value of date ', value.date);
    }
  }
}
