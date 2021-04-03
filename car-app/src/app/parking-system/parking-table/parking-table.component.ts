import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parking-table',
  templateUrl: './parking-table.component.html',
  styleUrls: ['./parking-table.component.scss']
})
export class ParkingTableComponent implements OnInit {
  slotsPosns: Array<any> = [];
  availableSlots: number;
  finalData: Array<object>;
  addCarData: boolean;
  color: string;
  searchn: string;
  searchc: string;
  dataCopy: Array<object>;
  license: string;
  collected:boolean=false
  uniqueColors: Array<any> = [];
  moneyCollected: number = 0;
  slots: Array<any> = [];
  data: Array<object> = [
    {
      color: 'Orange',
      slot: 1,
      number: 'HR-01AB-3489',
      date: '02 April, 12:30 P.M.'
    },
    {
      color: 'Black',
      slot: 2,
      number: 'MP-0AB-7409',
      date: '02 April, 12:30 P.M.'
    },
    {
      color: 'Yellow',
      slot: 3,
      number: 'AR-01AB-6989',
      date: '02 April, 12:30 P.M.'
    },
    {
      color: 'Pink',
      slot: 4,
      number: 'DL-07AB-4589',
      date: '02 April, 12:30 P.M.'
    },
    {
      color: 'Green',
      slot: 5,
      number: 'KA-04AB-1289',
      date: '02 April, 12:30 P.M.'
    }
  ];
  constructor() {}
  @Input() carsParked: number;
  @Input() places: number;

  ngOnInit(): void {
    this.collected=false
    this.addCarData = false;
    this.availableSlots = this.places - this.carsParked;
    for (var i = 0; i < this.places; i++) {
      this.slots.push(i + 1);
    }
    this.slots.sort();
    if (this.carsParked <= 5) {
      this.finalData = this.data.slice(0, this.carsParked);
      this.checkSlots();
    }
    if (this.carsParked > 5) {
      this.finalData = this.data;
      this.checkSlots();
      this.slots = this.slots.sort((a, b) => a - b);
      for (var m = this.finalData.length; m < this.carsParked; m++) {
        this.finalData.push({
          color: 'Green',
          slot: this.slots[0],
          number: 'HR-01AB-9989',
          date: '02 April, 12:30 P.M.'
        });
        this.slots.splice(0, 1);
      }
    }
    this.dataCopy = [...this.finalData];

    for (var i = 0; i < this.finalData.length; i++) {
      this.uniqueColors.push(this.finalData[i]['color']);
    }
    let uniqueChars = [...new Set(this.uniqueColors)];
    this.uniqueColors = uniqueChars;
    // console.log(this.uniqueColors)
  }

  checkColors() {
    for (var i = 0; i < this.finalData.length; i++) {
      this.uniqueColors.push(this.finalData[i]['color']);
    }
    let uniqueChars = [...new Set(this.uniqueColors)];
    this.uniqueColors = uniqueChars;
  }

  checkSlots() {
    for (var j = 0; j < this.finalData.length; j++) {
      for (var i = 0; i < this.slots.length; i++) {
        if (this.finalData[j]['slot'] === this.slots[i]) {
          this.slots.splice(i, 1);
        }
      }
    }
  }

  addCar() {
    this.addCarData = true;
  }

  search(event, name) {
    console.log(event.target.value);
this.searchn=event.target.value;
    this.finalData = this.dataCopy;
    const data = this.dataCopy;
    if (event.target.value === 'Select Color') {
      this.finalData = this.dataCopy;
    }
    var newData = [];
    if (name === 'searchPlate') {
      for (var x in data) {
        var expression = new RegExp(event.target.value, 'gi');
        var check = data[x]['number'].match(expression);
        if (check !== null) {
          newData.push(data[x]);
        }
      }
      this.finalData = newData;
    }
  }
  search1(event, name) {
    this.searchc=event.target.value;
    this.finalData = this.dataCopy;
    const data1 = this.finalData;
    if (event.target.value === 'Select Color') {
      this.finalData = this.dataCopy;
    }
    var nData = [];
    for (var x in data1) {
      var expression = new RegExp(event.target.value, 'gi');
      var check = data1[x]['color'].match(expression);
      if (check !== null) {
        nData.push(data1[x]);
      }
    }
    this.finalData = nData;
  }

  removeItem(item) {
    for (var i = 0; i < this.finalData.length; i++) {
      if (this.finalData[i]['slot'] === item.slot) {
        this.finalData.splice(i, 1);
        this.slots.push(item.slot);
        this.slots = this.slots.sort((a, b) => a - b);
        this.availableSlots = this.slots.length;
        this.moneyCollected = this.moneyCollected + 20;
        this.checkColors();
        this.dataCopy=[...this.finalData]
      }
    }
  }
  finalSearch(){
    if(this.searchn !== undefined && this.searchc !== undefined){
      const data1 = this.finalData;
      var nData = [];
      for (var x in data1) {
        var expression = new RegExp(this.searchn, 'gi');
        var check = data1[x]['number'].match(expression);

        if (check !== null) {
          nData.push(data1[x]);
        }
      }
      var pData=[];
      for (var x in nData) {
        var expression = new RegExp(this.searchc, 'gi');
        var check1 = nData[x]['color'].match(expression);

        if (check1 !== null) {
          pData.push(nData[x]);
        }
      }
      this.finalData = pData;
    }
  }

  queryData(){
    this.collected=true;
    console.log(this.moneyCollected)
    
    // window.alert("You have collected: ${this.moneyCollected} ")
  }

  reset(){
    this.finalData=this.dataCopy
    this.searchc='',
    this.searchn=''
    document.getElementById('searchn')['value'] = ''
    document.getElementById('searchc')['value'] = ''
  }

  inputValuess(event, id) {
    if (id === 'color') {
      this.color = event.target.value;
    }
    if (id === 'license') {
      this.license = event.target.value;
    }
  }

  submitt() {
    // console.log(this.slots)
    this.slots = this.slots.sort((a, b) => a - b);
    // console.log(this.slots)
    if (this.slots.length > 0) {
      // this.slots.sort();
      var newObj = Object.assign({
        color: this.color,
        slot: this.slots[0],
        number: this.license,
        date: new Date()
      });
      this.finalData.push(newObj);
      this.dataCopy=[...this.finalData]
      this.slots.splice(0, 1);
      this.addCarData = false;
      this.availableSlots = this.slots.length;
      for (var i = 0; i < this.finalData.length; i++) {
        this.uniqueColors.push(this.finalData[i]['color']);
      }
      let uniqueChars = [...new Set(this.uniqueColors)];
      this.uniqueColors = uniqueChars;
      // console.log(this.uniqueColors)
    } else {
      window.alert('No Slot Available');
      this.addCarData = false;
    }
  }
}
