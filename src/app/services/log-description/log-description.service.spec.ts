import { TestBed, inject } from "@angular/core/testing";

import { LogDescriptionService } from "./log-description.service";

describe("LogDescriptionService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogDescriptionService]
    });
  });

  it("should be created", inject(
    [LogDescriptionService],
    (service: LogDescriptionService) => {
      expect(service).toBeTruthy();
    }
  ));
});
