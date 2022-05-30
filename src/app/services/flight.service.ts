import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Flight } from "../model/flight";

@Injectable()
export abstract class FlightService {
  abstract search(from: string, to: string): Observable<Flight[]>;

  abstract save(selectedFlight: Flight): Observable<Flight>;
}
