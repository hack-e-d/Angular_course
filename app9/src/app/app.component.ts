import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vijay';
  mydate: Date = new Date();
  myMoney = 122333;
  myNumber = 1000.2332435;
  promisedata: Promise<any>;
  constructor() {
    this.promisedata = this.getPromise();
  }
  getPromise(){
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('promise response'), 2000);
    });
  }
}
