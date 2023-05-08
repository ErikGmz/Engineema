import { Component, Input, OnInit } from '@angular/core';
import { MovieData } from 'src/app/tickets-purchase/models/movie-data';

@Component({
  selector: 'app-selected-show-time',
  templateUrl: './selected-show-time.component.html',
  styleUrls: ['./selected-show-time.component.css']
})
export class SelectedShowTimeComponent implements OnInit {
  @Input() showTimeData: MovieData = {
    index: -1,
    title: '',
    imageSrc: '',
    description: '',
    duration: '',
    showTimes: []
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
