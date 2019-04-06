import { TestBed, inject } from "@angular/core/testing";

import { LoglistingService } from "./loglisting.service";

describe("LoglistingService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoglistingService]
    });
  });

  it("should be created", inject(
    [LoglistingService],
    (service: LoglistingService) => {
      expect(service).toBeTruthy();
    }
  ));
});
