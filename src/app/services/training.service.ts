import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TrainingModel} from "../models/taining.model";

@Injectable({
  providedIn: 'root'
})
export class TrainingService{
  private apiUrl = 'http://localhost:8080/api/soccer/training';

  constructor(private http: HttpClient) { }

  getTrainings(): Observable<TrainingModel[]> {
    return this.http.get<TrainingModel[]>(`${this.apiUrl}/getAllTraining`)
  }

  addTraining(training: TrainingModel): Observable<TrainingModel> {
    return this.http.post<TrainingModel>(`${this.apiUrl}/createTraining`, training)
  }

  deleteTraining(trainingId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${trainingId}`);
  }

  updateTraining(training: TrainingModel): Observable<TrainingModel> {
    return this.http.put<TrainingModel>(`${this.apiUrl}/${training.id}`, training);
  }

  getTrainingById(trainingId: string | undefined) {
    return this.http.get<TrainingModel>(`${this.apiUrl}/getTrainingById/${trainingId}`);
  }

}
