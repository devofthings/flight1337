import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "flight-validation-errors",
  templateUrl: "./flight-validation-errors.component.html",
  styleUrls: ["./flight-validation-errors.component.scss"],
})
export class FlightValidationErrorsComponent implements OnInit {
  constructor() {}

  @Input() errors: any;

  ngOnInit(): void {}
}
