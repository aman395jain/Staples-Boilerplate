import { Component, OnInit, ViewChild } from "@angular/core";
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent,
  PerfectScrollbarDirective
} from "ngx-perfect-scrollbar";

import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";

@Component({
  selector: "app-side-nav-bar",
  templateUrl: "./side-nav-bar.component.html",
  styleUrls: ["./side-nav-bar.component.scss"]
})
export class SideNavBarComponent implements OnInit {
  private _toggleIsExpend: boolean = false;

  public config: PerfectScrollbarConfigInterface = {};

  @ViewChild(PerfectScrollbarComponent)
  componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective)
  directiveRef?: PerfectScrollbarDirective;

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
