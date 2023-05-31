import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MovieData } from 'src/app/tickets-purchase/models/movie-data';
import { ShowTimeData } from 'src/app/tickets-purchase/models/showtime-data';
import { TicketsAvailabilityService } from 'src/app/tickets-purchase/services/tickets-availability.service';

@Component({
  selector: 'app-cash-payment',
  templateUrl: './cash-payment.component.html',
  styleUrls: ['./cash-payment.component.css']
})
export class CashPaymentComponent implements OnInit {
  @Input() selectedSeatCoordinates = "";

  cashForm = new FormGroup({
    cashCurrency: new FormControl("dollar", Validators.required),
    cashType: new FormControl("coins-bills", Validators.required),
  });

  constructor(private ticketsAvailabilityService: TicketsAvailabilityService) { }
  
  ngOnInit(): void {
    
  }

  onSubmit() {
    this.ticketsAvailabilityService.confirmTicketPurchase("Cash");
  }
}
