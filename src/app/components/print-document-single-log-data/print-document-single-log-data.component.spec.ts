import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PrintDocumentSingleLogDataComponent } from "./print-document-single-log-data.component";

describe("PrintDocumentSingleLogDataComponent", () => {
  let component: PrintDocumentSingleLogDataComponent;
  let fixture: ComponentFixture<PrintDocumentSingleLogDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrintDocumentSingleLogDataComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintDocumentSingleLogDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
