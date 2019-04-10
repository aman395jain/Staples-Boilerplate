import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DisplayLogTableComponent } from "./dashboard-log-table.component";

describe("DisplayLogTableComponent", () => {
  let component: DisplayLogTableComponent;
  let fixture: ComponentFixture<DisplayLogTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayLogTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
