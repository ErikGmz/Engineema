import { Injectable } from '@angular/core';
import { deepCopy } from '@angular-devkit/core/src/utils/object';
import { MovieData } from '../models/movie-data';
import { ShowTimeData } from '../models/showtime-data';
import { ShowTimeSelection } from '../models/showtime-selection';
import { MovieShowTimesData } from '../models/movie-showtimes';
import { ShowTimeSeat } from '../models/showtime.seat';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TicketsAvailabilityService {
  movieDataList: MovieData[] = [
    {
      index: 0,
      title: "Engineering Egypt",
      imageSrc: "assets/img/documentary_movies_images/engineering_egypt.jpg",
      description: "Twenty-five hundred years before the reign of Julius Caesar, the ancient Egyptians were deftly harnessing the power of engineering on an unprecedented scale. Egyptian temples, fortresses, pyramids and palaces forever redefined the limits of architectural possibility. They also served as a warning to all of Egypt's enemies-that the world's most advanced civilization could accomplish anything.",
      duration: "92 min",
      price: 4.56,
      showTimes: ["14:30", "16:15", "18:30"]
    },
    {
      index: 1,
      title: "Engineering the World Rally",
      imageSrc: "assets/img/documentary_movies_images/engineering_the_world_rally.jpg",
      description: "With unprecedented behind the scenes access, this six part series follows top motorsport team, Subaru WRT, and their champion driver Petter Solberg through an amazing year of high octane competition across four continents.",
      duration: "45 min",
      price: 5.58,
      showTimes: ["15:00", "16:30"]
    },
    {
      index: 2,
      title: "Burning",
      imageSrc: "assets/img/documentary_movies_images/burning.jpg",
      description: "In Burning, Australian director Eva Orner, an Oscar and Emmy award winner, investigates the forest fires in Australia from 2019-2020, shedding light on the issue of global climate change. The documentary delves into the disaster that unfolded across Australia, analyzing the irreversible damages and the role played by the federal government and the media.",
      duration: "84 min",
      price: 3.19,
      showTimes: ["15:15", "17:15"]
    },
    {
      index: 3,
      title: "Love & Engineering",
      imageSrc: "assets/img/documentary_movies_images/love_and_engineering.jpg",
      description: "Love & Engineering is for everyone who has experienced uncertainty, had a crush on someone or been on a date. The film asks what are our so-called “feelings” and can we can control them or not. Challenges of the dating world are approached through the perspective of male engineers: how to encounter people in the real world?",
      duration: "85 min",
      price: 4.78,
      showTimes: ["15:00", "17:00", "20:00"]
    },
    {
      index: 4,
      title: "Engineering Connections",
      imageSrc: "assets/img/documentary_movies_images/engineering_connections.jpg",
      description: "With hands-on experiments and intrepid investigative work, Richard Hammond reveals the secrets behind modern-day superstructures.",
      duration: "55 min",
      price: 4.16,
      showTimes: ["14:45", "15:45", "17:30"]
    }
  ];

  showTimeSeatsMap: ShowTimeSeat[] = [
    { seatCoordinates: "A1", seatState: "U" }, { seatCoordinates: "A2", seatState: "U" }, { seatCoordinates: "A3", seatState: "U" }, { seatCoordinates: "B1", seatState: "U" },
    { seatCoordinates: "B2", seatState: "U" }, { seatCoordinates: "B3", seatState: "U" }, { seatCoordinates: "C1", seatState: "U" }, { seatCoordinates: "C2", seatState: "U" },
    { seatCoordinates: "C3", seatState: "U" }, { seatCoordinates: "D1", seatState: "U" }, { seatCoordinates: "D2", seatState: "U" }, { seatCoordinates: "D3", seatState: "U" }
  ];

  showTimeData: ShowTimeData = {
    showTime: "",
    seatsStatesMap: deepCopy(this.showTimeSeatsMap),
    freeTickets: 12
  }

  moviesShowTimesData: MovieShowTimesData[] = [
    {
      index: 0,
      showTimes: [
        { showTime: "14:30", seatsStatesMap: deepCopy(this.showTimeData.seatsStatesMap), freeTickets: this.showTimeData.freeTickets},
        { showTime: "16:15", seatsStatesMap: deepCopy(this.showTimeData.seatsStatesMap), freeTickets: this.showTimeData.freeTickets},
        { showTime: "18:30", seatsStatesMap: deepCopy(this.showTimeData.seatsStatesMap), freeTickets: this.showTimeData.freeTickets},
      ] 
    },
    {
      index: 1,
      showTimes: [
        { showTime: "15:00", seatsStatesMap: deepCopy(this.showTimeData.seatsStatesMap), freeTickets: this.showTimeData.freeTickets},
        { showTime: "16:30", seatsStatesMap: deepCopy(this.showTimeData.seatsStatesMap), freeTickets: this.showTimeData.freeTickets}
      ] 
    },
    {
      index: 2,
      showTimes: [
        { showTime: "15:15", seatsStatesMap: deepCopy(this.showTimeData.seatsStatesMap), freeTickets: this.showTimeData.freeTickets},
        { showTime: "17:15", seatsStatesMap: deepCopy(this.showTimeData.seatsStatesMap), freeTickets: this.showTimeData.freeTickets}
      ]
    },
    {
      index: 3,
      showTimes: [
        { showTime: "15:00", seatsStatesMap: deepCopy(this.showTimeData.seatsStatesMap), freeTickets: this.showTimeData.freeTickets},
        { showTime: "17:00", seatsStatesMap: deepCopy(this.showTimeData.seatsStatesMap), freeTickets: this.showTimeData.freeTickets},
        { showTime: "20:00", seatsStatesMap: deepCopy(this.showTimeData.seatsStatesMap), freeTickets: this.showTimeData.freeTickets}
      ]
    },
    {
      index: 4,
      showTimes: [
        { showTime: "14:45", seatsStatesMap: deepCopy(this.showTimeData.seatsStatesMap), freeTickets: this.showTimeData.freeTickets},
        { showTime: "15:45", seatsStatesMap: deepCopy(this.showTimeData.seatsStatesMap), freeTickets: this.showTimeData.freeTickets},
        { showTime: "17:30", seatsStatesMap: deepCopy(this.showTimeData.seatsStatesMap), freeTickets: this.showTimeData.freeTickets}
      ]
    }
  ];

  public selectedShowTime: ShowTimeSelection = {
    movieIndex: -1,
    showTime: "",
    seatCoordinates: ""
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
  
  constructor(private router: Router) {
    this.checkSessionStorageMoviesData();
    this.checkSessionStorageShowTimeData();
  }

  checkSessionStorageMoviesData(): void {
    //Check if SessionStorage has any data of movies.
    let sessionStorageShowTimeData = JSON.parse(sessionStorage.getItem("moviesData") || "null") || null;
    if(sessionStorageShowTimeData === null) {
      //Load in SessionStorage all movies data.
      sessionStorage.setItem("moviesData", JSON.stringify(this.moviesShowTimesData));
    }
    else {
      //Get the SessionStorage information.
      this.moviesShowTimesData = sessionStorageShowTimeData;
    }
  }

  checkSessionStorageShowTimeData(): void {
    //Check if SessionStorage has any data of showtime selection.
    let sessionStorageShowTimeData = JSON.parse(sessionStorage.getItem("selectedShowTimeData") || "null") || null;
    if(sessionStorageShowTimeData === null) {
      //Load in SessionStorage showtime selection data.
      sessionStorage.setItem("selectedShowTimeData", JSON.stringify(this.selectedShowTime));
    }
    else {
      //Get the SessionStorage information.
      this.selectedShowTime = sessionStorageShowTimeData;
    }
  }

  selectedShowTimeDataIsValid(): boolean {
    try {
      return this.movieDataList[this.selectedShowTime.movieIndex].showTimes.includes(this.selectedShowTime.showTime)
      && (this.moviesShowTimesData[this.selectedShowTime.movieIndex].showTimes.find(value => value.showTime == this.selectedShowTime.showTime)?.freeTickets || 0) > 0;
    }
    catch(error) {
      return false;
    }
  }

  selectedShowTimeSeatDataIsValid(): boolean {
    try {
      if(!this.selectedShowTimeDataIsValid()) {
        return false;
      }

      let selectedShowTimeData: ShowTimeData | undefined = this.moviesShowTimesData[this.selectedShowTime.movieIndex].showTimes.find(value => value.showTime == this.selectedShowTime.showTime) || undefined;
      if(selectedShowTimeData == undefined) {
        return false;
      }

      return selectedShowTimeData.seatsStatesMap.find(value => value.seatCoordinates == this.selectedShowTime.seatCoordinates)?.seatState == "U" || false;
    }
    catch(error) {
      return false;
    }
  }

  setSelectedShowTimeSelection(movieIndex: number, showTime: string): void {
    this.selectedShowTime.movieIndex = movieIndex;
    this.selectedShowTime.showTime = showTime;
    sessionStorage.setItem("selectedShowTimeData", JSON.stringify(this.selectedShowTime));
  }

  setSelectedShowTimeSeatSelection(seatCoordinates: string) {
    this.selectedShowTime.seatCoordinates = seatCoordinates;
    sessionStorage.setItem("selectedShowTimeData", JSON.stringify(this.selectedShowTime));
  }

  updateShowTimesData(moviesShowTimesData: MovieShowTimesData[]): void {
    this.moviesShowTimesData = moviesShowTimesData;
    sessionStorage.setItem("moviesData", JSON.stringify(this.moviesShowTimesData));
  }

  getSelectedShowTimeInfo(movieIndex: number): MovieData {
    return this.movieDataList[movieIndex];
  }

  clearSelectedShowTimeData(): void {
    this.selectedShowTime.movieIndex = -1;
    this.selectedShowTime.showTime = "";
    this.selectedShowTime.seatCoordinates = "";
    sessionStorage.setItem("selectedShowTimeData", JSON.stringify(this.selectedShowTime));
  }

  clearSelectedSeatData(): void {
    this.selectedShowTime.seatCoordinates = "";
    sessionStorage.setItem("selectedShowTimeData", JSON.stringify(this.selectedShowTime));
  }

  confirmTicketPurchase(paymentMethod: string): void {
    //Load all the selected showtime and seat information.
    let movieData: MovieData = this.getSelectedShowTimeInfo(this.selectedShowTime.movieIndex);

    Swal.fire({
      title: 'Purchase confirmation',
      html: "<p> Do you want to confirm the purchase of the ticket for the specified showtime and seat? </p>"
      + "<p style='line-height: 2.5' class='mb-0'> <span class='badge fs-6 py-2' style='background-color: rgb(168, 13, 13)'> <i class='bi bi-film me-1'> </i> Movie title </span> "
      + "<span class='badge fs-6 py-1 lh-base text-wrap' style='background-color: rgb(168, 13, 13)'>" + movieData.title + "</span> </p>"
      + "<p style='line-height: 2.5' class='mb-0'> <span class='badge fs-6 py-2' style='background-color: rgb(255, 116, 23)'> <i class='bi bi-ticket-perforated me-1'> </i> Showtime </span> "
      + "<span class='badge fs-6 py-2' style='background-color: rgb(255, 116, 23)'>" + this.selectedShowTime.showTime + "</span> </p>"
      + "<p class='mb-0' style='line-height: 2.5'> <span class='badge fs-6 py-2' style='background-color: rgb(13, 110, 253)'> <i class='bi bi-geo-fill me-1'> </i> Seat coordinate </span> "
      + "<span class='badge fs-6 py-2' style='background-color: rgb(13, 110, 253)'>" + this.selectedShowTime.seatCoordinates + "</span> </p>"
      + "<p class='mb-0' style='line-height: 2.5'> <span class='badge fs-6 py-2' style='background-color: rgb(19, 146, 15)'> <i class='bi bi-cash-stack me-1'> </i> Price </span> "
      + "<span class='badge fs-6 py-2' style='background-color: rgb(19, 146, 15)'>$" + movieData.price.toFixed(2) + "</span> </p>"
      + "<p class='mb-0' style='line-height: 2.5'> <span class='badge fs-6 py-2 bg-secondary'> <i class='bi bi-credit-card-2-back-fill me-1'> </i> Payment method </span> "
      + "<span class='badge fs-6 py-2 bg-secondary'>" + paymentMethod + "</span> </p>"
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
        let moviesShowTimesData = this.moviesShowTimesData;

        let showTimeData = moviesShowTimesData[this.selectedShowTime.movieIndex].showTimes.find(value => 
        value.showTime == this.selectedShowTime.showTime) || null;

        if(showTimeData === null) {
          Swal.fire(this.sweetAlertErrorTemplate)
          .then((response) => {
            return;
          })
          return;
        }
        showTimeData.freeTickets--;

        let seatData = Object.values(showTimeData.seatsStatesMap).find(value => value.seatCoordinates == this.selectedShowTime.seatCoordinates) || null
        if(seatData === null) {
          Swal.fire(this.sweetAlertErrorTemplate)
          .then((response) => {
            return;
          })
          return;
        }

        seatData.seatState = "O";
        this.updateShowTimesData(moviesShowTimesData);

        Swal.fire(this.sweetAlertSuccessfulTemplate)
        .then((response) => {
          this.router.navigate(["/tickets-purchase/movie-selection"]);
        })
      }
    })
  }
}