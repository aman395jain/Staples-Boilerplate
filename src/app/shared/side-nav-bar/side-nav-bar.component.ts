import { Component, OnInit } from "@angular/core";
import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";

@Component({
  selector: "app-side-nav-bar",
  templateUrl: "./side-nav-bar.component.html",
  styleUrls: ["./side-nav-bar.component.scss"]
})
export class SideNavBarComponent implements OnInit {
  private _toggleIsExpend: boolean = false;
  constructor(private _navBarService: NavBarService) {}

  ngOnInit() {
    this._navBarService.getToggleStatus().subscribe(toggleStatus => {
      // console.log("in the test nav bar component", toggleStatus);
      this._toggleIsExpend = toggleStatus;
    });
  }

  getElementNameTest(eleName) {
    this._navBarService.setElementNameFromSideBar(eleName);
  }
}
