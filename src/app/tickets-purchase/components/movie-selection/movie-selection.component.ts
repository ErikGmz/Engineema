import { Component, OnInit } from '@angular/core';
import { TicketsAvailabilityService } from '../../services/tickets-availability.service';

@Component({
  selector: 'app-movie-selection',
  templateUrl: './movie-selection.component.html',
  styleUrls: ['./movie-selection.component.css']
})
export class MovieSelectionComponent implements OnInit {
  constructor(public ticketsAvailabilityService: TicketsAvailabilityService) { }

  ngOnInit(): void {
  }

}
