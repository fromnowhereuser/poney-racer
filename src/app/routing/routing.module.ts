import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../common/landing/landing.component';
import { RacesListComponent } from '../modules/race/races-list/races-list.component';
import { AuthComponent } from '../modules/auth/auth/auth.component';
import { ErrorComponent } from '../common/error/error.component';
import { AuthGuard } from '../guards/auth.guard';
import { RacesResolver } from '../modules/race/resolvers/races.resolver';
import { RaceDetailsComponent } from '../modules/race/race-details/race-details.component';
import { RaceResolver } from '../modules/race/resolvers/race.resolver';


export const ROUTES: Routes = [
  {
    path: '', redirectTo: 'landing', pathMatch: 'full'
  },
  {
    path: 'landing', component: LandingComponent
  },
  {
    path: 'raceslist',
    component: RacesListComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    resolve: {
      races: RacesResolver
    },
    children: [
      {
        path: ':id',
        component: RaceDetailsComponent,
        resolve: {
          race: RaceResolver
        },
      }
    ]
  },
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true,
    })
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }