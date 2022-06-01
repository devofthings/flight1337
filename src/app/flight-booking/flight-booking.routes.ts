import { Routes } from "@angular/router";
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { PassengerSearchComponent } from "./passenger-search/passenger-search.component";

export const FLIGHT_ROUTES: Routes = [
  {
    path: "flight-search",
    component: FlightSearchComponent,
  },
  {
    path: "passenger-search",
    component: PassengerSearchComponent,
  },
];
