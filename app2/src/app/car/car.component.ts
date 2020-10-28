import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Object[];
  hide: boolean;
  constructor() {
    this.cars = [
      {
        make : 'a',
        model : '1',
        yom : '2020'
      },
      {
        make : 'b',
        model : 'x2',
        yom : '2010'
      },
      {
        make : 'c',
        model : '1s',
        yom : '2012'
      },
    ];

    this.hide = true;
  }

  // tslint:disable-next-line: typedef
  public getCars(){
    return this.cars;
  }

  // tslint:disable-next-line: typedef
  public toggle(){
    this.hide = !this.hide;
  }
  ngOnInit(): void {
  }

}
