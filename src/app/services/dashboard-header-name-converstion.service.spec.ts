import { TestBed, inject } from "@angular/core/testing";

import { DashboardHeaderNameConverstionService } from "./dashboard-header-name-converstion.service";

describe("DashboardHeaderNameConverstionService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardHeaderNameConverstionService]
    });
  });

  it("should be created", inject(
    [DashboardHeaderNameConverstionService],
    (service: DashboardHeaderNameConverstionService) => {
      expect(service).toBeTruthy();
    }
  ));
});
