import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieData } from 'src/app/tickets-purchase/models/movie-data';
import { ShowTimeSeat } from 'src/app/tickets-purchase/models/showtime.seat';
import { TicketsAvailabilityService } from 'src/app/tickets-purchase/services/tickets-availability.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
  @Input() showTimeSeatData: ShowTimeSeat = {
    seatCoordinates: "",
    seatState: ""
  }
  @Input() showTime: string = "";
  @Input() seatSelection = false;
  @Input() selectedSeatCoordinates = "";

  constructor(private ticketsAvailabilityService: TicketsAvailabilityService,
  private router: Router) { 
  }

  ngOnInit(): void {
  }

  selectShowtimeSeat(): void {
    //Save selected seat data.
    this.ticketsAvailabilityService.setSelectedShowTimeSeatSelection(this.showTimeSeatData.seatCoordinates);

    //Navigate to payment selection page.
    this.router.navigate(["/tickets-purchase/payment-selection"]);
  }
}
