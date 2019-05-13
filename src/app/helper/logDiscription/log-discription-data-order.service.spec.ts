import { TestBed, inject } from "@angular/core/testing";

import { LogDiscriptionDataOrderService } from "./log-discription-data-order.service";

describe("LogDiscriptionDataOrderService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogDiscriptionDataOrderService]
    });
  });

  it("should be created", inject(
    [LogDiscriptionDataOrderService],
    (service: LogDiscriptionDataOrderService) => {
      expect(service).toBeTruthy();
    }
  ));
});
