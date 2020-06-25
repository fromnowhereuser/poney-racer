import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceComponent } from './race/race.component';
import { RacesListComponent } from './races-list/races-list.component';



@NgModule({
  declarations: [
    RaceComponent,
    RacesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RaceModule { }
