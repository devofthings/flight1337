import { Component, OnInit } from "@angular/core";
import { Flight } from "../../model/flight";
import { FlightService } from "../../services/flight.service";

export interface Basket {
  [key: string]: boolean;
}

@Component({
  selector: "flight-search",
  templateUrl: "./flight-search.component.html",
  styleUrls: ["./flight-search.component.scss"],
})
export class FlightSearchComponent implements OnInit {
  from = "Hamburg";
  to = "Graz";
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;
  message = "";

  basket: Basket = {
    "3": true,
    "5": true,
  };

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {}

  search(): void {
    this.flightService.search(this.from, this.to).subscribe({
      next: (flights: Flight[]) => {
        this.flights = flights;
      },
      error: (errResp) => {
        console.error("Error loading flights", errResp);
      },
    });
  }

  save(): void {
    if (this.selectedFlight) {
      this.flightService.save(this.selectedFlight).subscribe({
        next: (flight) => {
          this.selectedFlight = flight;
          this.message = "Success!";
        },
        error: (errResp) => {
          console.error("Error saving flghts", errResp);
          this.message = "Error: " + errResp.message;
        },
      });
    }
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
