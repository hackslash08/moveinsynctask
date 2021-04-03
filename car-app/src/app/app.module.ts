import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingSystemModule } from './parking-system/parking-system.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParkingSystemModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
