import { Component, OnInit } from '@angular/core';
import { TicketsAvailabilityService } from '../../services/tickets-availability.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public ticketsAvailabilityService: TicketsAvailabilityService) { }

  ngOnInit(): void {
  }

}
