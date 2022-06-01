import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { FlightCardComponent } from "./flight-card/flight-card.component";
import { FlightValidationErrorsComponent } from "./flight-validation-errors/flight-validation-errors.component";
import { RouterModule } from "@angular/router";
import { FLIGHT_ROUTES } from "./flight-booking.routes";
import { FlightEditComponent } from './flight-edit/flight-edit.component';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightValidationErrorsComponent,
    FlightSearchComponent,
    FlightEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(FLIGHT_ROUTES),
  ],
  exports: [FlightSearchComponent],
})
export class FlightBookingModule {}
