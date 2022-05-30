import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { createFlightService } from "./factories/flight-service.factory";
import { FlightService } from "./services/flight.service";

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FlightSearchComponent,
  ],
  providers: [
    {
      provide: FlightService,
      useFactory: createFlightService,
      deps: [HttpClient],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
