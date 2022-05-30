import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { DefaultFlightService } from "../services/default-flight.service";
import { DummyFlightService } from "../services/dummy-flight.service";

const DEBUG = false;

export const createFlightService = () => {
  if (DEBUG) {
    return new DummyFlightService();
  } else {
    return new DefaultFlightService(inject(HttpClient));
  }
};
