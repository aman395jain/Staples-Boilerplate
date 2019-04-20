import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LogDataTableComponent } from "./log-data-table.component";

describe("LogDataTableComponent", () => {
  let component: LogDataTableComponent;
  let fixture: ComponentFixture<LogDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogDataTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
