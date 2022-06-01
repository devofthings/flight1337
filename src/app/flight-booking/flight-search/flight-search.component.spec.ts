import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Observable, of } from "rxjs";
import { createFlightService } from "src/app/factories/flight-service.factory";
import { Flight } from "src/app/model/flight";
import { FlightService } from "src/app/services/flight.service";
import { FlightBookingModule } from "../flight-booking.module";
import { FlightSearchComponent } from "./flight-search.component";

describe("flight-search.component", () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  const result = [
    { id: 17, from: "Graz", to: "Hamburg", date: "now", delayed: true },
    { id: 18, from: "Vienna", to: "Barcelona", date: "now", delayed: true },
    { id: 19, from: "Frankfurt", to: "Salzburg", date: "now", delayed: true },
  ];

  const flightServiceMock = {
    search(from: string, to: string): Observable<Flight[]> {
      return of(result);
    },
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FlightBookingModule],
      providers: [
        // Fügen Sie hier eventuelle Provider aus
        // Ihrer app.module.ts ein (falls vorhanden)
        {
          provide: FlightService,
          useFactory: createFlightService,
        },
      ],
    })
      .overrideComponent(FlightSearchComponent, {
        set: {
          providers: [
            {
              provide: FlightService,
              useValue: flightServiceMock,
            },
          ],
        },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
  });

  it("should not have any flights loaded initially", () => {
    expect(component.flights.length).toBe(0);
  });

  it("should not load flights w/o from and to", () => {
    component.from = "";
    component.to = "";
    component.search();

    expect(component.flights.length).toBe(0);
  });

  it("should load flights w/ from and to", () => {
    component.from = "Hamburg";
    component.to = "Graz";
    component.search();

    expect(component.flights.length).toBe(3);
  });
});
