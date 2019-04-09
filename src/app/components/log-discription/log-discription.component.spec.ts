import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LogDiscriptionComponent } from "./log-discription.component";

describe("LogDiscriptionComponent", () => {
  let component: LogDiscriptionComponent;
  let fixture: ComponentFixture<LogDiscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogDiscriptionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDiscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
