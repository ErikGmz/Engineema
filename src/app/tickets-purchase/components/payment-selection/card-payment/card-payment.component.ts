import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { MovieData } from 'src/app/tickets-purchase/models/movie-data';
import { ShowTimeData } from 'src/app/tickets-purchase/models/showtime-data';
import { TicketsAvailabilityService } from 'src/app/tickets-purchase/services/tickets-availability.service';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css']
})
export class CardPaymentComponent implements OnInit {
  @Input() selectedSeatCoordinates = "";
  currentDate: Date = new Date();

  cardForm = new FormGroup({
    cardNumber: new FormControl("", [Validators.required, Validators.minLength(16), Validators.maxLength(19), Validators.pattern("^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$")]),
    cardExpirationDate: new FormControl(formatDate(new Date(Date.now()), "yyyy-MM-dd", "en"), [Validators.required, this.currentDateAsMinimum]),
    cardSecurityCode: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern("^[0-9]*$")])
  });

  constructor(private ticketsAvailabilityService: TicketsAvailabilityService) { }

  ngOnInit(): void {
  }

  currentDateAsMinimum(expirationDateControl: FormControl): ValidationErrors | null {
    let currentDate: Date = new Date();
    currentDate = new Date(formatDate(new Date(currentDate), "yyyy-MM-dd", "en") + "T00:00");

    if(new Date(expirationDateControl.value + "T00:00") < currentDate) {
      return { "minExpirationDate": true };
    }

    return null;
  }

  onSubmit() {
    this.ticketsAvailabilityService.confirmTicketPurchase("Card");
  }
}
