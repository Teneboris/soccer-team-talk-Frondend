import {Component, OnInit} from '@angular/core';
import {TrainingService} from "../../services/training.service";
import {TrainingModel} from "../../models/taining.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-dialog-content-add-training',
  templateUrl: './dialog-content-add-training.component.html',
  styleUrls: ['./dialog-content-add-training.component.css']
})
export class DialogContentAddTrainingComponent implements OnInit{

  training: TrainingModel = {
    address: "",
    city: "",
    description: '',
    postalCode: '',
    date: this.getNextDay()
  }

  trainingForm!: FormGroup;
  trainings_List: TrainingModel[] = [];

constructor(private trainingService: TrainingService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.trainingForm = this.fb.group({
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      description: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      date: ['', [Validators.required]]
    });
  }

onSubmit() {
  this.createTraining();
}

getNextDay(): Date{
  let nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + 1);
  return nextDate;
}

createTraining() {
  if(this.trainingForm.valid){
    this.trainingService.addTraining(this.training).subscribe(
      response => {
        this.refreshComponent()
        console.log('training successful created', response);
      },
      error => {
        console.error('training file a error', error);
      }
    );
  }
}

refreshComponent(): void {
  const currentUrl = this.router.url;
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate([currentUrl]);
  });
}

checkIfTheDateInThePastOrNow(selectedDate: Date): void{
    const today = new Date();
    if(selectedDate <= today){
      console.error("the selected date muss not be now or in the past");
    }
}

outPutFunction(value:number){
  console.log(value);
}

}
