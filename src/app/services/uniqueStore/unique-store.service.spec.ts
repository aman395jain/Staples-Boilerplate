import { TestBed, inject } from "@angular/core/testing";

import { UniqueStoreService } from "./unique-store.service";

describe("UniqueStoreService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniqueStoreService]
    });
  });

  it("should be created", inject(
    [UniqueStoreService],
    (service: UniqueStoreService) => {
      expect(service).toBeTruthy();
    }
  ));
});
