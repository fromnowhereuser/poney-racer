import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Race } from 'src/app/models/race';

@Injectable({ providedIn: 'root' })
export class RacesResolver implements Resolve<Race[]> {
    resolve(route: ActivatedRouteSnapshot): Observable<Race[]> | Promise<Race[]> | Race[] {
        return ;
    }
}