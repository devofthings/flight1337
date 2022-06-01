import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-flight-edit",
  templateUrl: "./flight-edit.component.html",
  styleUrls: ["./flight-edit.component.scss"],
})
export class FlightEditComponent implements OnInit {
  id = "";
  showDetails = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: { [x: string]: string }) => {
      this.id = params["id"];
      this.showDetails = params["showDetails"];
    });
  }
}
