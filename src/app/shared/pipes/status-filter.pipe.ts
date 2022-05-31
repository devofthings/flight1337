import { Pipe, PipeTransform } from "@angular/core";
import { Flight } from "src/app/model/flight";

@Pipe({
  name: "statusFilter",
})
export class StatusFilterPipe implements PipeTransform {
  transform(flights: Array<Flight>, delayed: boolean): Flight[] {
    return flights.filter((flight) => flight.delayed === delayed);
  }
}
