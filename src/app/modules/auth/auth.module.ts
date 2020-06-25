import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Routes, RouterModule, Router } from '@angular/router';


export const ROUTES: Routes = [
  {
    path: '', redirectTo: 'auth', pathMatch: 'full',
  },
  {
    path: 'auth', component: AuthComponent
  },
]

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule { }
