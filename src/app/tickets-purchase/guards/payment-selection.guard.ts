import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TicketsAvailabilityService } from '../services/tickets-availability.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentSelectionGuard implements CanActivate {
  constructor(private ticketsAvailabilityService: TicketsAvailabilityService,
  private router: Router) {
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const selectedShowTimeSeatExists = this.ticketsAvailabilityService.selectedShowTimeSeatDataIsValid();

    if(selectedShowTimeSeatExists) {
      return true;
    }
    else {
      //Reset seat selection data.
      this.ticketsAvailabilityService.clearSelectedSeatData();

      //Any invalid data specification of showtime seat will trigger redirection to seat selection page.
      return this.router.navigate(["/tickets-purchase/seat-selection"]);
    }
  } 
  
}
