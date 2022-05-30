import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Flight } from "../model/flight";
import { FlightService } from "./flight.service";

@Injectable({
  providedIn: "root",
})
export class DefaultFlightService implements FlightService {
  constructor(private http: HttpClient) {}
  search(from: string, to: string): Observable<Flight[]> {
    const url = "http://www.angular.at/api/flight";

    const headers = new HttpHeaders().set("Accept", "application/json");

    const params = new HttpParams().set("from", from).set("to", to);

    return this.http.get<Flight[]>(url, { headers, params });
  }
  save(selectedFlight: Flight): Observable<Flight> {
    const url = "http://www.angular.at/api/flight";

    const headers = new HttpHeaders().set("Accept", "application/json");

    return this.http.post<Flight>(url, selectedFlight, { headers });
  }
}
