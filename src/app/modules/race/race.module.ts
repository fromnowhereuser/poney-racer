import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceComponent } from './race/race.component';
import { RacesListComponent } from './races-list/races-list.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RouterModule } from '@angular/router';
import { RaceFormComponent } from './race-form/race-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RaceComponent,
    RacesListComponent,
    RaceDetailsComponent,
    RaceFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
  ]
})
export class RaceModule { }
