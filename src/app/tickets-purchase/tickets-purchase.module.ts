import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSelectionComponent } from './components/movie-selection/movie-selection.component';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { MovieDataComponent } from './components/movie-selection/movie-data/movie-data.component';
import { ShowtimeComponent } from './components/movie-selection/movie-data/showtime/showtime.component';
import { TicketsAvailabilityService } from './services/tickets-availability.service';
import { SelectedShowTimeComponent } from './components/seat-selection/selected-show-time/selected-show-time.component';
import { SeatsMapComponent } from './components/seat-selection/seats-map/seats-map.component';
import { SeatComponent } from './components/seat-selection/seats-map/seat/seat.component';
import { NumberToLetterPipe } from './pipes/number-to-letter.pipe';

@NgModule({
  declarations: [
    MovieSelectionComponent,
    SeatSelectionComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MovieDataComponent,
    ShowtimeComponent,
    SelectedShowTimeComponent,
    SeatsMapComponent,
    SeatComponent,
    NumberToLetterPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MovieSelectionComponent,
    SeatSelectionComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  providers: [
    TicketsAvailabilityService
  ]
})
export class TicketsPurchaseModule { }
