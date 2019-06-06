import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LogDescriptionComponent } from "./log-description.component";

describe("LogDescriptionComponent", () => {
  let component: LogDescriptionComponent;
  let fixture: ComponentFixture<LogDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogDescriptionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
