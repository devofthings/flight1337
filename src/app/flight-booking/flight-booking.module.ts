import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { FlightCardComponent } from "./flight-card/flight-card.component";

@NgModule({
  declarations: [FlightSearchComponent, FlightCardComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [FlightSearchComponent],
})
export class FlightBookingModule {}
