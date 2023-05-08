import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TicketsAvailabilityService } from '../services/tickets-availability.service';

@Injectable({
  providedIn: 'root'
})
export class SeatSelectionGuard implements CanActivate {
  constructor(private ticketsAvailabilityService: TicketsAvailabilityService,
  private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const selectedShowTimeExists = this.ticketsAvailabilityService.selectedShowTimeDataIsValid();

    if(selectedShowTimeExists) {
      return true;
    }
    else {
      //Reset showtime selection data.
      this.ticketsAvailabilityService.clearSelectedShowTimeSelection();

      //Any invalid data specification of showtime will trigger redirection to homepage.
      return this.router.navigate(["/tickets-purchase/movie-selection"]);
    }
  } 
}