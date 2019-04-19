import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PrintDocumentLayoutComponent } from "./print-document-layout.component";

describe("PrintDocumentLayoutComponent", () => {
  let component: PrintDocumentLayoutComponent;
  let fixture: ComponentFixture<PrintDocumentLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrintDocumentLayoutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintDocumentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
