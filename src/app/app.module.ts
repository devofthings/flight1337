import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { createFlightService } from "./factories/flight-service.factory";
import { FlightService } from "./services/flight.service";
import { SharedModule } from "./shared/shared.module";
import { FlightBookingModule } from "./flight-booking/flight-booking.module";
import { HomeComponent } from "./home/home.component";
import { PreloadAllModules, RouterModule } from "@angular/router";
import { APP_ROUTES } from "./app.routes";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    // FlightBookingModule,	// <-- This would prevent lazy loading
    RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules }),
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
  ],
  providers: [
    {
      provide: FlightService,
      useFactory: createFlightService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
