import {Component, inject, OnInit} from '@angular/core';
import {
  DialogContentAddTrainingComponent
} from "../../components/dialog-content-add-training/dialog-content-add-training.component";
import {MatDialog} from "@angular/material/dialog";
import {TrainingModel} from "../../models/taining.model";
import {TrainingService} from "../../services/training.service";
import {
  DialogContentTrainingDetailsComponent
} from "../../components/dialog-content-open-training-details/dialog-content-training-details.component";

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit{

  trainings: TrainingModel[] = [];

  clickedCard: number | null = null;
  readonly dialog = inject(MatDialog)

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.trainingService.getTrainings().subscribe(data => {
      this.trainings = data})
  }

  onCardClick(index: number): void {
    this.clickedCard = this.clickedCard === index ? null : index
  }

  outPutFunction(value:string){
    console.log(value);
  }

  openDialog () {
    const dialogRef = this.dialog.open(DialogContentAddTrainingComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogTrainingDetails(){
    const dialogRef = this.dialog.open(DialogContentTrainingDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog training result: ${result}`);
    });
  }

}
