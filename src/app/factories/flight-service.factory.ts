import { HttpClient } from "@angular/common/http";
import { DefaultFlightService } from "../services/default-flight.service";
import { DummyFlightService } from "../services/dummy-flight.service";

const DEBUG = false;

export const createFlightService = (http: HttpClient) => {
  if (DEBUG) {
    return new DummyFlightService();
  } else {
    return new DefaultFlightService(http);
  }
};
