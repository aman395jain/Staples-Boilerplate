import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SolutionBuilderOrderComponent } from "./solution-builder-order.component";

describe("SolutionBuilderOrderComponent", () => {
  let component: SolutionBuilderOrderComponent;
  let fixture: ComponentFixture<SolutionBuilderOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionBuilderOrderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionBuilderOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
