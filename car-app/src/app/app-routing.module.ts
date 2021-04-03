import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingSystemModule } from './parking-system/parking-system.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), ParkingSystemModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
