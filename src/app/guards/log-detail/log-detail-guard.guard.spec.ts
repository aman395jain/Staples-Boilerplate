import { TestBed, async, inject } from "@angular/core/testing";

import { LogDetailGuard } from "./log-detail-guard.guard";

describe("LogDetailGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogDetailGuard]
    });
  });

  it("should ...", inject([LogDetailGuard], (guard: LogDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
