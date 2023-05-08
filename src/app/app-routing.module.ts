import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSelectionComponent } from './tickets-purchase/components/movie-selection/movie-selection.component';
import { SeatSelectionComponent } from './tickets-purchase/components/seat-selection/seat-selection.component';
import { HomeComponent } from './tickets-purchase/components/home/home.component';
import { SeatSelectionGuard } from './tickets-purchase/guards/seat-selection.guard';

const routes: Routes = [
  { path: 'tickets-purchase/movie-selection', component: MovieSelectionComponent },
  { path: 'tickets-purchase/seat-selection', component: SeatSelectionComponent, canActivate: [SeatSelectionGuard] },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
