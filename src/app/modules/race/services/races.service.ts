import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Race } from 'src/app/models/race';
import { switchMap, map, toArray, filter, find } from 'rxjs/operators';


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

  getRaceById(id: number): Observable<Race> {
    return this
      .http
      .get<Array<Race>>(this.url)
      .pipe(
        switchMap(array => array),
        find(race => race.id === id)
      )
  }

  isRaceNameAvailable(name: string): Observable<boolean> {
    return this
      .http
      .get<Array<Race>>(this.url)
      .pipe(
        switchMap(array => array),
        find(race => race.name === name),
        map((val: Race) => val === undefined)
      );
  }
}
