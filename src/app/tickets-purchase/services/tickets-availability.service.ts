import { Injectable } from '@angular/core';
import { deepCopy } from '@angular-devkit/core/src/utils/object';
import { MovieData } from '../models/movie-data';
import { ShowTimeData } from '../models/showtime-data';
import { ShowTimeSelection } from '../models/showtime-selection';
import { MovieShowTimesData } from '../models/movie-showtimes';
import { ShowTimeSeat } from '../models/showtime.seat';

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
      showTimes: ["14:30", "16:15", "18:30"]
    },
    {
      index: 1,
      title: "Engineering the World Rally",
      imageSrc: "assets/img/documentary_movies_images/engineering_the_world_rally.jpg",
      description: "With unprecedented behind the scenes access, this six part series follows top motorsport team, Subaru WRT, and their champion driver Petter Solberg through an amazing year of high octane competition across four continents.",
      duration: "45 min",
      showTimes: ["15:00", "16:30"]
    },
    {
      index: 2,
      title: "Burning",
      imageSrc: "assets/img/documentary_movies_images/burning.jpg",
      description: "In Burning, Australian director Eva Orner, an Oscar and Emmy award winner, investigates the forest fires in Australia from 2019-2020, shedding light on the issue of global climate change. The documentary delves into the disaster that unfolded across Australia, analyzing the irreversible damages and the role played by the federal government and the media.",
      duration: "84 min",
      showTimes: ["15:15", "17:15"]
    },
    {
      index: 3,
      title: "Love & Engineering",
      imageSrc: "assets/img/documentary_movies_images/love_and_engineering.jpg",
      description: "Love & Engineering is for everyone who has experienced uncertainty, had a crush on someone or been on a date. The film asks what are our so-called “feelings” and can we can control them or not. Challenges of the dating world are approached through the perspective of male engineers: how to encounter people in the real world?",
      duration: "85 min",
      showTimes: ["15:00", "17:00", "20:00"]
    },
    {
      index: 4,
      title: "Engineering Connections",
      imageSrc: "assets/img/documentary_movies_images/engineering_connections.jpg",
      description: "With hands-on experiments and intrepid investigative work, Richard Hammond reveals the secrets behind modern-day superstructures.",
      duration: "55 min",
      showTimes: ["14:45", "15:45", "17:30"]
    }
  ];

  showTimeSeatsMap: ShowTimeSeat[] = [
    { seatCoordinate: "A1", seatState: "U" }, { seatCoordinate: "A2", seatState: "U" }, { seatCoordinate: "A3", seatState: "U" }, { seatCoordinate: "B1", seatState: "U" },
    { seatCoordinate: "B2", seatState: "U" }, { seatCoordinate: "B3", seatState: "U" }, { seatCoordinate: "C1", seatState: "U" }, { seatCoordinate: "C2", seatState: "U" },
    { seatCoordinate: "C3", seatState: "U" }, { seatCoordinate: "D1", seatState: "U" }, { seatCoordinate: "D2", seatState: "U" }, { seatCoordinate: "D3", seatState: "U" }
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
    showTime: ""
  }
  
  constructor() {
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

  setSelectedShowTimeSelection(movieIndex: number, showTime: string): void {
    this.selectedShowTime.movieIndex = movieIndex;
    this.selectedShowTime.showTime = showTime;
    sessionStorage.setItem("selectedShowTimeData", JSON.stringify(this.selectedShowTime));
  }

  updateShowTimesData(moviesShowTimesData: MovieShowTimesData[]): void {
    this.moviesShowTimesData = moviesShowTimesData;
    sessionStorage.setItem("moviesData", JSON.stringify(this.moviesShowTimesData));
  }

  getSelectedShowTimeInfo(movieIndex: number): MovieData {
    return this.movieDataList[movieIndex];
  }

  clearSelectedShowTimeSelection(): void {
    this.selectedShowTime.movieIndex = -1;
    this.selectedShowTime.showTime = "";
    sessionStorage.setItem("selectedShowTimeData", JSON.stringify(this.selectedShowTime));
  }
}