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

  barHeight: number;
  pageSize1: number;
  pagelength: number;

  constructor(private _navBarService: NavBarService) {}

  ngOnInit() {
    this._navBarService.getToggleStatus().subscribe(toggleStatus => {
      // console.log("in the test nav bar component", toggleStatus);
      this._toggleIsExpend = toggleStatus;
    });

    this._navBarService.getPageSize().subscribe(pageSize => {
      this.pageSize1 = pageSize;
    });

    this._navBarService.getPageLength().subscribe(length => {
      this._navBarService.getPageSize().subscribe(pageSize => {
        this.pageSize1 = pageSize;
      });
      this.pagelength = length;
      console.log("in the side bar length", this.pagelength);
      if (this.pageSize1 === 5) {
        this.barHeight = 592;
      } else if (this.pageSize1 === 10) {
        if (this.pagelength <= 5) {
          this.barHeight = 592;
        } else if (this.pagelength > 5 && this.pagelength < 10) {
          this.barHeight = 100 * this.pagelength;
        } else {
          this.barHeight = 938;
        }
      } else if (this.pageSize1 === 25) {
        if (this.pagelength <= 5) {
          this.barHeight = 592;
        } else if (this.pagelength > 5 && this.pagelength <= 10) {
          this.barHeight = 100 * this.pagelength;
        } else if (this.pagelength > 10 && this.pagelength < 25) {
          this.barHeight = 938 + 72 * (this.pagelength - 10);
        } else {
          this.barHeight = 2019;
        }
      } else if (this.pageSize1 === 50) {
        if (this.pagelength <= 5) {
          this.barHeight = 592;
        } else if (this.pagelength > 5 && this.pagelength <= 10) {
          this.barHeight = 100 * this.pagelength;
        } else if (this.pagelength < 50) {
          this.barHeight = 2019 + 80 * (this.pagelength - 25);
        } else {
          this.barHeight = 4038;
        }
      }
    });
  }

  getElementNameTest(eleName) {
    this._navBarService.setElementNameFromSideBar(eleName);
  }
}
