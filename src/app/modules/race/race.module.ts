import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceComponent } from './race/race.component';
import { RacesListComponent } from './races-list/races-list.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RaceComponent,
    RacesListComponent,
    RaceDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
  ]
})
export class RaceModule { }
