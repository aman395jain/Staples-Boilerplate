import { TestBed, inject } from "@angular/core/testing";

import { KioskOrderService } from "./kiosk-order.service";

describe("KioskOrderService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KioskOrderService]
    });
  });

  it("should be created", inject(
    [KioskOrderService],
    (service: KioskOrderService) => {
      expect(service).toBeTruthy();
    }
  ));
});
