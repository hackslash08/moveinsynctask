import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-parking-system',
  templateUrl: './parking-system.component.html',
  styleUrls: ['./parking-system.component.scss']
})
export class ParkingSystemComponent implements OnInit {
  carsParked: number = 0;
  places: number = 0;
  componentChange: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.componentChange = false;
  }

  inputValues(event, id) {
    if (id === 'places') {
      this.places = event.target.value;
    }
    if (id === 'carsParked') {
      this.carsParked = event.target.value;
    }
  }

  submit() {
    this.componentChange = true;
  }
}
