import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com',
  templateUrl: './com.component.html',
  styleUrls: ['./com.component.css']
})
export class ComComponent implements OnInit {
  x: number;
  y: number;
  constructor() {
    this.x = 10;
    this.y = 20;
   }

  ngOnInit(): void {
  }

}
