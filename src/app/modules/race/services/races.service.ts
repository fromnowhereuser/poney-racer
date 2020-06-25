import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RacesService {
  private url: 'http://91.121.148.187:8080/races';
  constructor() { }
}
