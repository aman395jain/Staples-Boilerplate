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

  indexForPagination: number[] = [1, 2, 3];
  prevIndexDisable: boolean = true;
  totalIndex: number;
  numberOfIndex: number;

  constructor(
    private _paginationForLongDataService: PaginationForLongDataService,
    private _navBarService: NavBarService
  ) {}

  ngOnInit() {
    this._paginationForLongDataService
      .setNumberOfRowsForPagination()
      .subscribe(index => {
        this.totalIndex = index;
        index = index / 100;
        this.numberOfIndex = Math.ceil(index);
      });
  }

  getIndexForPagination(i: number) {
    if (typeof this.tableName === "undefined") {
      this._paginationForLongDataService.getIndexPagination(i);
    } else {
      const tableNameFromSideNav = {
        tableName: "",
        intialIndex: 1,
        spinnerFlag: false
      };
      tableNameFromSideNav.intialIndex = i;
      tableNameFromSideNav.tableName = this.tableName;
      this._navBarService.setElementNameFromSideBar(tableNameFromSideNav);
    }
  }

  disabledStatus(moveFlag): boolean {
    if (moveFlag === "prev") {
      if (this.indexForPagination[0] === 1) {
        return true;
      } else {
        return false;
      }
    } else if (moveFlag === "next" && typeof this.totalIndex === "number") {
      return null;
    }
  }

  updateIndex(moveFlag) {
    if (moveFlag === "next") {
      this.indexForPagination[0] = this.indexForPagination[0] + 3;
      this.indexForPagination[1] = this.indexForPagination[1] + 3;
      this.indexForPagination[2] = this.indexForPagination[2] + 3;
    } else if (moveFlag === "prev") {
      this.indexForPagination[0] = this.indexForPagination[0] - 3;
      this.indexForPagination[1] = this.indexForPagination[1] - 3;
      this.indexForPagination[2] = this.indexForPagination[2] - 3;
    }
    if (this.indexForPagination[0] === 1) {
      this.prevIndexDisable = true;
    } else {
      this.prevIndexDisable = false;
    }
  }
}
