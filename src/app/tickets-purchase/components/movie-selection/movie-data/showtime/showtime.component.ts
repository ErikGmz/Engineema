import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketsAvailabilityService } from 'src/app/tickets-purchase/services/tickets-availability.service';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.css']
})
export class ShowtimeComponent implements OnInit {
  @Input() movieIndex: number = -1;
  @Input() showTime: string = "";
  @Input() selectionBehavior: boolean = false;
  @Input() availableTickets: boolean = false;

  constructor(private router: Router, private ticketsAvailabilityService: TicketsAvailabilityService) { }

  ngOnInit(): void {
  }

  selectedShowTime(): void {
    //Save selected showtime data.
    this.ticketsAvailabilityService.setSelectedShowTimeSelection(this.movieIndex, this.showTime);

    //Navigate to seat selection page.
    this.router.navigate(["/tickets-purchase/seat-selection"]);
  }
}
