import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const APP_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "flight-booking",
    loadChildren: () =>
      import("./flight-booking/flight-booking.module").then(
        (module) => module.FlightBookingModule
      ),
  },
  {
    path: "**",
    redirectTo: "home",
  },
];
