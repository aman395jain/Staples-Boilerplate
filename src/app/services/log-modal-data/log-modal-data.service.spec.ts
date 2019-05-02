import { TestBed, inject } from "@angular/core/testing";

import { LogModalDataService } from "./log-modal-data.service";

describe("LogModalDataService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogModalDataService]
    });
  });

  it("should be created", inject(
    [LogModalDataService],
    (service: LogModalDataService) => {
      expect(service).toBeTruthy();
    }
  ));
});
