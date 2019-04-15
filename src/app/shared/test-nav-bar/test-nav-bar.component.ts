import { Component, OnInit } from "@angular/core";
import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";

@Component({
  selector: "app-test-nav-bar",
  templateUrl: "./test-nav-bar.component.html",
  styleUrls: ["./test-nav-bar.component.scss"]
})
export class TestNavBarComponent implements OnInit {
  private _toggleIsExpend: boolean = true;
  constructor(private _navBarService: NavBarService) {}

  ngOnInit() {
    this._navBarService.getToggleStatus().subscribe(toggleStatus => {
      console.log("in the test nav bar component", toggleStatus);
      this._toggleIsExpend = toggleStatus;
    });
  }

  getElementNameTest(eleName) {
    this._navBarService.setElementNameFromSideBar(eleName);
  }
}
