import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent,
  PerfectScrollbarDirective
} from "ngx-perfect-scrollbar";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";
import { Router } from "@angular/router";
import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";
import { PaginationForLongDataService } from "src/app/services/pagination-for-longData/pagination-for-long-data.service";

@Component({
  selector: "staples-side-nav-bar",
  templateUrl: "./side-nav-bar.component.html",
  styleUrls: ["./side-nav-bar.component.scss"]
})
export class SideNavBarComponent implements OnInit, OnDestroy {
  _toggleIsExpend: boolean = false;

  public config: PerfectScrollbarConfigInterface = {};

  @ViewChild(PerfectScrollbarComponent)
  componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective)
  directiveRef?: PerfectScrollbarDirective;
  private _onDestroy = new Subject<void>();

  barHeight: number = 592;
  pageSize: number;
  pagelength: number;

  constructor(
    private _navBarService: NavBarService,
    private router: Router,
    private _logModalDataService: LogModalDataService,
    private _paginationForLongDataService: PaginationForLongDataService
  ) {}

  ngOnInit() {
    this._navBarService
      .getToggleStatus()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(toggleStatus => {
        // console.log("in the test nav bar component", toggleStatus);
        this._toggleIsExpend = toggleStatus;
      });

    this._navBarService
      .getPageSize()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(size => {
        this.pageSize = size;
      });

    this._navBarService
      .getPageLength()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(length => {
        this.pagelength = length;
        console.log("in the side bar length", this.pagelength);
        // if (this.pageSize === 5) {
        //   this.barHeight = 592;
        // } else if (this.pageSize === 10) {
        //   if (this.pagelength <= 5) {
        //     this.barHeight = 592;
        //   } else if (this.pagelength > 5 && this.pagelength < 10) {
        //     this.barHeight = 100 * this.pagelength;
        //   } else {
        //     this.barHeight = 952;
        //   }
        // } else if (this.pageSize === 25) {
        //   if (this.pagelength <= 5) {
        //     this.barHeight = 592;
        //   } else if (this.pagelength > 5 && this.pagelength <= 10) {
        //     this.barHeight = 100 * this.pagelength;
        //   } else if (this.pagelength > 10 && this.pagelength < 25) {
        //     this.barHeight = 938 + 72 * (this.pagelength - 10);
        //   } else {
        //     this.barHeight = 1992;
        //   }
        // } else if (this.pageSize === 50) {
        //   if (this.pagelength <= 5) {
        //     this.barHeight = 592;
        //   } else if (this.pagelength > 5 && this.pagelength <= 10) {
        //     this.barHeight = 100 * this.pagelength;
        //   } else if (this.pagelength < 50) {
        //     this.barHeight = 2019 + 72 * (this.pagelength - 25);
        //   } else {
        //     this.barHeight = 3892;
        //   }
        // }
      });
  }
  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  getElementNameTest(eleName) {
    if (this.router.url === "/testDataManagement/logDetail") {
      this._logModalDataService.getLogDetailFlag(false);
      this.router.navigate(["/testDataManagement"]);
    } else if (this.router.url === "/testDataManagement/new-kiosk-order") {
      this._logModalDataService.getKioskOrderFlag(false);
      this.router.navigate(["/testDataManagement"]);
    }
    const tableNameFromSideNav = {
      tableName: "",
      initialIndex: 1,
      spinnerFlag: true,
      spinnerForPagination: false
    };
    tableNameFromSideNav.tableName = eleName;
    this._navBarService.setElementNameFromSideBar(tableNameFromSideNav);
    this._navBarService.getPageForIndexPagination(1);
    this.barHeight = 592;
    this._navBarService.setPageSize(5);
    this._navBarService.getAdvanceSearchStatus(false);
    const paginationStatus = { clicked: true, index: 1 };
    paginationStatus.clicked = false;
    this._paginationForLongDataService.getPaginationIndexForBar(
      paginationStatus
    );
  }
}
