import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://btal-ride.herokuapp.com/api/admin/bus';


@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http: HttpClient) {}

  getBus(){
    return this.http.get(this.url);
  }
}
