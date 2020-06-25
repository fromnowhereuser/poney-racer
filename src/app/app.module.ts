import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './common/navigation/navigation.component';
import { LandingComponent } from './common/landing/landing.component';
import { ErrorComponent } from './common/error/error.component';
import { HttpClientModule } from '@angular/common/http';

// angular material
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RoutingModule } from './routing/routing.module';
import { RaceModule } from './modules/race/race.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingComponent,
    ErrorComponent
  ],
  imports: [
    //angular modules
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,

    //custom modules
    RaceModule,

    //mat
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
