import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { DefaultFlightService } from "./default-flight.service";

fdescribe("DefaultFlightService", () => {
  let service: DefaultFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(DefaultFlightService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
