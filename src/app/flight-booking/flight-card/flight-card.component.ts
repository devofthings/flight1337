import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { initFlight } from "src/app/model/flight";

@Component({
  selector: "flight-card",
  templateUrl: "./flight-card.component.html",
  styleUrls: ["./flight-card.component.scss"],
})
export class FlightCardComponent implements OnInit {
  constructor() {}

  @Input() item = initFlight;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit() {}

  select() {
    this.selected = true;
    this.selectedChange.next(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(this.selected);
  }
}
