import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TrainingModel} from "../models/taining.model";

@Injectable({
  providedIn: 'root'
})
export class TrainingService{
  private apiUrl = 'http://localhost:8080/api/soccer';

  constructor(private http: HttpClient) { }

  getTrainings(): Observable<TrainingModel[]> {
    return this.http.get<TrainingModel[]>(`${this.apiUrl}/training/getAllTraining`)
  }

  addTraining(training: TrainingModel): Observable<TrainingModel> {
    return this.http.post<TrainingModel>(`${this.apiUrl}/training/createTraining`, training)
  }

}