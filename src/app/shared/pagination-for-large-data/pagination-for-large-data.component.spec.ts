import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PaginationForLargeDataComponent } from "./pagination-for-large-data.component";

describe("PaginationForLargeDataComponent", () => {
  let component: PaginationForLargeDataComponent;
  let fixture: ComponentFixture<PaginationForLargeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationForLargeDataComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationForLargeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
