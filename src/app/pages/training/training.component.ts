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
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit{

  trainings: TrainingModel[] = [];

  clickedCard: number | null = null;
  readonly dialog = inject(MatDialog);

  constructor(private trainingService: TrainingService,
              private route: Router,
              private activatedRoute: ActivatedRoute) {}

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

  getParamsId(paramsId: string | undefined) {
    this.activatedRoute.snapshot.paramMap.get('trainingId');
  }

  openDialog () {
      const dialogRef = this.dialog.open(DialogContentAddTrainingComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

  gotToTraining(trainingId: string | undefined) {
    this.route.navigate(['/training', trainingId]);
  }


  openDialogTrainingDetails(training: TrainingModel){
      const dialogRef = this.dialog.open(DialogContentTrainingDetailsComponent, {
        data:{
          id: training.id,
          date: training.date,
          address: training.address,
          city: training.city,
          postalCode: training.postalCode,
          description: training.description
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.gotToTraining('');
      });
  }

}
