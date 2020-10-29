import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: object[];
  constructor() {
    this.movies = [{
      t : '3' ,
      g : 'horror' ,
      d : 'ush'
    },
      {
        t : 'asd' ,
        g : 'horror' ,
        d : 'r'
      },
      {
        t : '3sdfs' ,
        g : 'horror' ,
        d : 'sh'
      },
    ];
  }

  ngOnInit(): void {
  }

}
