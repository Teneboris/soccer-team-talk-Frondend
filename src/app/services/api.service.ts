import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";

@Injectable({providedIn:'root'})
export class apiService {

  private readonly  apiURL='http://localhost:4200'

  constructor(private http:HttpClient) {
  }


}
