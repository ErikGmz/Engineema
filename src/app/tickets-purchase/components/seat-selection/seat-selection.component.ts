import { Component, OnInit } from '@angular/core';
import { TicketsAvailabilityService } from '../../services/tickets-availability.service';
import { MovieData } from '../../models/movie-data';
import { ShowTimeData } from '../../models/showtime-data';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent implements OnInit {
  movieData: MovieData = {
    index: -1,
    title: '',
    imageSrc: '',
    description: '',
    duration: '',
    showTimes: []
  };

  showTimeData: ShowTimeData = {
    showTime: "",
    seatsStatesMap: [],
    freeTickets: 0
  }

  constructor(public ticketsAvailabilityService: TicketsAvailabilityService) {
    //Generate movie selection information template.
    let selectedMovieIndex = ticketsAvailabilityService.selectedShowTime.movieIndex;
    let selectedShowTime = ticketsAvailabilityService.selectedShowTime.showTime;

    this.movieData = Object.assign({}, ticketsAvailabilityService.getSelectedShowTimeInfo(selectedMovieIndex));
    this.movieData.showTimes = Array.of(selectedShowTime);

    //Load all the selected showtime seats map information.
    this.showTimeData.showTime = selectedShowTime;
    this.showTimeData.seatsStatesMap = Object.assign([], ticketsAvailabilityService.moviesShowTimesData[selectedMovieIndex].showTimes.find(value => value.showTime == selectedShowTime)?.seatsStatesMap || []);
    this.showTimeData.freeTickets = ticketsAvailabilityService.moviesShowTimesData[selectedMovieIndex].showTimes.find(value => value.showTime == selectedShowTime)?.freeTickets || 0;
  }  

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Clear showtime selection data.
    this.ticketsAvailabilityService.clearSelectedShowTimeSelection();
  }
}
