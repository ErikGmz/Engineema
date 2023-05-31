import { Component, OnInit } from '@angular/core';
import { TicketsAvailabilityService } from '../../services/tickets-availability.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ticketsAvailabilityService: TicketsAvailabilityService) { }

  ngOnInit(): void {
    this.ticketsAvailabilityService.clearSelectedShowTimeData();
  }

}
