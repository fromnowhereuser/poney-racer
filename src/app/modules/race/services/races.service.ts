import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Race } from 'src/app/models/race';


@Injectable({
  providedIn: 'root'
})
export class RacesService {
  private url = 'http://91.121.148.187:8080/races';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Race>> {
    return this
      .http
      .get<Array<Race>>(this.url)

  }
}
