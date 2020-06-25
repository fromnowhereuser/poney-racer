import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Race } from 'src/app/models/race';
import { RacesService } from '../services/races.service';

@Injectable({ providedIn: 'root' })
export class RaceResolver implements Resolve<Race> {

    constructor(
        private raceService: RacesService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Race> | Promise<Race> | Race {
        return this.raceService.getRaceById(parseInt(route.paramMap.get('id')));
    }
}