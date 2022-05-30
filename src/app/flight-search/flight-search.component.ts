import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Flight } from "../model/flight";

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  search(): void {
    const url = "http://www.angular.at/api/flight";

    const headers = new HttpHeaders().set("Accept", "application/json");

    const params = new HttpParams().set("from", this.from).set("to", this.to);

    this.http.get<Flight[]>(url, { headers, params }).subscribe({
      next: (flights: Flight[]) => {
        this.flights = flights;
      },
      error: (errResp) => {
        console.error("Error loading flights", errResp);
      },
    });
  }

  save(): void {
    const url = "http://www.angular.at/api/flight";

    const headers = new HttpHeaders().set("Accept", "application/json");
    this.http.post<Flight>(url, this.selectedFlight, { headers }).subscribe({
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

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
