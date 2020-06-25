import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../common/landing/landing.component';
import { RacesListComponent } from '../modules/race/races-list/races-list.component';
import { AuthComponent } from '../modules/auth/auth/auth.component';
import { ErrorComponent } from '../common/error/error.component';


export const ROUTES: Routes = [
  {
    path: '', redirectTo:'landing', pathMatch:'full'
  },
  {
    path: 'landing', component: LandingComponent
  },
  {
    path: 'raceslist', component: RacesListComponent
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
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
