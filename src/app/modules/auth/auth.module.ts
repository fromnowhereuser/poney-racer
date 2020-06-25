import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';

import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,

  ]
})
export class AuthModule { }
