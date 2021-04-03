import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingSystemComponent } from './parking-system.component';
import { Routes, RouterModule } from '@angular/router';
import { ParkingTableComponent } from './parking-table/parking-table.component';


const STATIC_ROUTES: Routes = [
  {
    path: 'parking-system', 
    component: ParkingSystemComponent,
    data: { pageLabel: '/parking-system' },
    
  },
  {
    path: 'table', 
    component: ParkingTableComponent,
    data: { pageLabel: '/table' },
    
  },
] 
@NgModule({
  declarations: [ParkingSystemComponent, ParkingTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(STATIC_ROUTES),
  ],
  exports:[ParkingSystemComponent,ParkingTableComponent]
})
export class ParkingSystemModule { }
