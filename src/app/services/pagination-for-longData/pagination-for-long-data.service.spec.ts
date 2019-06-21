import { TestBed, inject } from "@angular/core/testing";

import { PaginationForLongDataService } from "./pagination-for-long-data.service";

describe("PaginationForLongDataService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginationForLongDataService]
    });
  });

  it("should be created", inject(
    [PaginationForLongDataService],
    (service: PaginationForLongDataService) => {
      expect(service).toBeTruthy();
    }
  ));
});
