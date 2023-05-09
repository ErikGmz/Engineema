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
    seatCoordinate: "",
    seatState: ""
  }

  sweetAlertSuccessfulTemplate: any = {
    title: 'Successful ticket purchase!',
    text: "The ticket for the showtime was successfully purchased! Enjoy your movie! :)",
    icon: 'success',
    confirmButtonText: 'Return to movie selection',
    confirmButtonColor: "#198754"
  };

  sweetAlertErrorTemplate: any = {
    title: 'Ticket purchase error',
    text: "An error has ocurred while processing the ticket purchase. :(",
    icon: 'error',
    confirmButtonText: 'Okay',
    confirmButtonColor: "#dc3545"
  };

  constructor(private ticketsAvailabilityService: TicketsAvailabilityService,
  private router: Router) { 
  }

  ngOnInit(): void {
  }

  confirmTicketPurchase(): void {
    //Mark the seat icon as selected.
    this.showTimeSeatData.seatState = "S";

    //Load all the selected showtime and seat information.
    let movieData: MovieData = this.ticketsAvailabilityService.getSelectedShowTimeInfo(this.ticketsAvailabilityService.selectedShowTime.movieIndex);

    Swal.fire({
      title: 'Purchase confirmation',
      html: "<p> Do you want to confirm the purchase of the ticket for the specified showtime and seat? </p>"
      + "<p style='line-height: 2.5' class='mb-0'> <span class='badge fs-6 py-2' style='background-color: rgb(168, 13, 13)'> <i class='bi bi-film me-1'> </i> Movie title </span> "
      + "<span class='badge fs-6 py-1 lh-base text-wrap' style='background-color: rgb(168, 13, 13)'>" + movieData.title + "</span> </p>"
      + "<p style='line-height: 2.5' class='mb-0'> <span class='badge fs-6 py-2' style='background-color: rgb(255, 116, 23)'> <i class='bi bi-ticket-perforated me-1'> </i> Showtime </span> "
      + "<span class='badge fs-6 py-2' style='background-color: rgb(255, 116, 23)'>" + movieData.showTimes[0] + "</span> </p>"
      + "<p class='mb-0' style='line-height: 2.5'> <span class='badge fs-6 py-2' style='background-color: rgb(13, 110, 253)'> <i class='bi bi-geo-fill me-1'> </i> Seat coordinate </span> "
      + "<span class='badge fs-6 py-2' style='background-color: rgb(13, 110, 253)'>" + this.showTimeSeatData.seatCoordinate + "</span> </p>"
      ,
      icon: 'question',
      confirmButtonText: 'Yes',
      confirmButtonColor: "#198754",
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonText: "No",
      cancelButtonColor: "#dc3545"
    })
    .then((response) => {
      if(response.isConfirmed) {
        //Save in Session Storage all changes.
        let moviesShowTimesData = this.ticketsAvailabilityService.moviesShowTimesData;

        let showTimeData = moviesShowTimesData[this.ticketsAvailabilityService.selectedShowTime.movieIndex].showTimes.find(value => 
        value.showTime == this.ticketsAvailabilityService.selectedShowTime.showTime) || null;

        if(showTimeData === null) {
          Swal.fire(this.sweetAlertErrorTemplate)
          .then((response) => {
            return;
          })
          return;
        }
        showTimeData.freeTickets--;

        let seatData = Object.values(showTimeData.seatsStatesMap).find(value => value.seatCoordinate == this.showTimeSeatData.seatCoordinate) || null
        if(seatData === null) {
          Swal.fire(this.sweetAlertErrorTemplate)
          .then((response) => {
            return;
          })
          return;
        }

        seatData.seatState = "O";
        this.ticketsAvailabilityService.updateShowTimesData(moviesShowTimesData);

        Swal.fire(this.sweetAlertSuccessfulTemplate)
        .then((response) => {
          //Mark the seat icon as occupied.
          this.showTimeSeatData.seatState = "O";

          this.router.navigate(["/tickets-purchase/movie-selection"]);
        })
      }
      else {
        //Mark the seat icon as available.
        this.showTimeSeatData.seatState = "U";
      }
    })
  }
}
