import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { FlightSearchComponent } from "./flight-search/flight-search.component";

@NgModule({
  declarations: [FlightSearchComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [FlightSearchComponent],
})
export class FlightBookingModule {}
