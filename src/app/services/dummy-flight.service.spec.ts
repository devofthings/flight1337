import { TestBed } from "@angular/core/testing";

import { DummyFlightService } from "./dummy-flight.service";

fdescribe("DummyFlightService", () => {
  let service: DummyFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyFlightService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
