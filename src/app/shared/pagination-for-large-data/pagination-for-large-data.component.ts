import { Component, OnInit, Input } from "@angular/core";

import { PaginationForLongDataService } from "src/app/services/pagination-for-longData/pagination-for-long-data.service";
import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";

/**
 * @component PaginationForLargeDataComponent
 * To achieve the functionality of pagination for Large number of data.
 */
@Component({
  selector: "staples-pagination-for-large-data",
  templateUrl: "./pagination-for-large-data.component.html",
  styleUrls: ["./pagination-for-large-data.component.scss"]
})
export class PaginationForLargeDataComponent implements OnInit {
  @Input("tableName") tableName: string;

  numberOfIndex: number;
  page: number = 1;

  constructor(
    private _paginationForLongDataService: PaginationForLongDataService,
    private _navBarService: NavBarService
  ) {}

  ngOnInit() {
    this._paginationForLongDataService
      .setNumberOfRowsForPagination()
      .subscribe(index => {
        index = index / 100;
        this.numberOfIndex = Math.ceil(index);
      });
    this._navBarService.setPageForIndexPagination().subscribe(pageNumber => {
      this.page = pageNumber;
    });
    this._paginationForLongDataService
      .setPaginationIndexForBar()
      .subscribe(paginationIndex => {
        if (paginationIndex.clicked) {
          this.page = paginationIndex.index;
        }
      });
  }

  getIndexForPagination(i: any) {
    const paginationStatus = { clicked: true, index: 1 };
    paginationStatus.index = i;
    this._paginationForLongDataService.getPaginationIndexForBar(
      paginationStatus
    );
    if (typeof this.tableName === "undefined") {
      this._paginationForLongDataService.getIndexPagination(i);
    } else {
      const tableNameFromSideNav = {
        tableName: "",
        initialIndex: 1,
        spinnerFlag: false,
        spinnerForPagination: true
      };
      tableNameFromSideNav.initialIndex = i;
      tableNameFromSideNav.tableName = this.tableName;
      this._navBarService.setElementNameFromSideBar(tableNameFromSideNav);
    }
  }
}
