import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { createFlightService } from "../factories/flight-service.factory";
import { Flight } from "../model/flight";

@Injectable({
  providedIn: "root",
  useFactory: createFlightService,
  deps: [HttpClient],
})
export abstract class FlightService {
  abstract search(from: string, to: string): Observable<Flight[]>;

  abstract save(selectedFlight: Flight): Observable<Flight>;
}
