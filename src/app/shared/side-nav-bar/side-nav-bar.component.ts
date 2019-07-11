import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent,
  PerfectScrollbarDirective
} from "ngx-perfect-scrollbar";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Router } from "@angular/router";

import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";
import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";
import { PaginationForLongDataService } from "src/app/services/pagination-for-longData/pagination-for-long-data.service";

@Component({
  selector: "staples-side-nav-bar",
  templateUrl: "./side-nav-bar.component.html",
  styleUrls: ["./side-nav-bar.component.scss"]
})
export class SideNavBarComponent implements OnInit, OnDestroy {
  public config: PerfectScrollbarConfigInterface = {};
  private _onDestroy = new Subject<void>();

  @ViewChild(PerfectScrollbarComponent)
  componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective)
  directiveRef?: PerfectScrollbarDirective;

  _toggleIsExpend: boolean = false;
  barHeight: number = 592;
  pageSize: number;
  pagelength: number;
  currentChoice: string = "";

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
      });
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  getActive(choice: string) {
    if (this.currentChoice == choice) return true;
    else return false;
  }

  getElementNameTest(eleName) {
    this.currentChoice = eleName;
    if (this.router.url === "/testDataManagement/logDetail") {
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
