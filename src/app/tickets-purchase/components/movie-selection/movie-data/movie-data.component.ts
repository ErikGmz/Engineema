import { Component, Input, OnInit } from '@angular/core';
import { MovieData } from '../../../models/movie-data';
import { MovieShowTimesData } from '../../../models/movie-showtimes';

@Component({
  selector: 'app-movie-data',
  templateUrl: './movie-data.component.html',
  styleUrls: ['./movie-data.component.css']
})
export class MovieDataComponent implements OnInit {
  @Input() movieData: MovieData = {
    index: -1,
    title: '',
    imageSrc: '',
    description: '',
    duration: '',
    price: 0,
    showTimes: []
  };

  @Input() movieShowTimes: MovieShowTimesData = {
    index: -1,
    showTimes: []
  }

  constructor() { }

  ngOnInit(): void {
  }

}
