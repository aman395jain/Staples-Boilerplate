import { Component, OnInit } from "@angular/core";

import { PaginationForLongDataService } from "src/app/services/pagination-for-longData/pagination-for-long-data.service";

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
  indexForPagination: number[] = [1, 2, 3];
  prevIndexDisable: boolean = true;

  constructor(
    private _paginationForLongDataService: PaginationForLongDataService
  ) {}

  ngOnInit() {}

  getIndexForPagination(i: number) {
    this._paginationForLongDataService.getIndexPagination(i);
  }

  disabledStatus(moveFlag): boolean {
    if (moveFlag === "prev" && this.indexForPagination[0] === 1) {
      return true;
    } else {
      return false;
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
