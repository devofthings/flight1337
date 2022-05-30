import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Flight } from "../model/flight";
import { FlightService } from "./flight.service";

@Injectable({
  providedIn: "root",
})
export class DummyFlightService implements FlightService {
  constructor() {}
  search(): Observable<Flight[]> {
    return of([
      {
        id: 1,
        from: "Frankfurt",
        to: "Flagranti",
        date: "2022-01-02T19:00+01:00",
        delayed: false,
      },
      {
        id: 2,
        from: "Frankfurt",
        to: "Kognito",
        date: "2022-01-02T19:30+01:00",
        delayed: false,
      },
      {
        id: 3,
        from: "Frankfurt",
        to: "Mallorca",
        date: "2022-01-02T20:00+01:00",
        delayed: false,
      },
    ]);
  }

  save(selectedFlight: Flight): Observable<Flight> {
    return of(selectedFlight);
  }
}
