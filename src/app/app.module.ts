import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsPurchaseModule } from './tickets-purchase/tickets-purchase.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TicketsPurchaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
