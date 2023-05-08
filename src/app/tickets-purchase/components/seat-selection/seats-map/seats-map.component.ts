import { Component, Input, OnInit } from '@angular/core';
import { ShowTimeData } from 'src/app/tickets-purchase/models/showtime-data';

@Component({
  selector: 'app-seats-map',
  templateUrl: './seats-map.component.html',
  styleUrls: ['./seats-map.component.css']
})
export class SeatsMapComponent implements OnInit {
  @Input() showTimeData: ShowTimeData = {
    showTime: "",
    seatsStatesMap: [],
    freeTickets: 0
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
