import { TestBed, inject } from "@angular/core/testing";

import { PrintDocumentService } from "./print-document.service";

describe("PrintDocumentService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrintDocumentService]
    });
  });

  it("should be created", inject(
    [PrintDocumentService],
    (service: PrintDocumentService) => {
      expect(service).toBeTruthy();
    }
  ));
});
