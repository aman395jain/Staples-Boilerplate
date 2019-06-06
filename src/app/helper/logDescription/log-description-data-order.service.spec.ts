import { TestBed, inject } from "@angular/core/testing";

import { LogDescriptionDataOrderService } from "./log-description-data-order.service";

describe("LogDescriptionDataOrderService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogDescriptionDataOrderService]
    });
  });

  it("should be created", inject(
    [LogDescriptionDataOrderService],
    (service: LogDescriptionDataOrderService) => {
      expect(service).toBeTruthy();
    }
  ));
});
