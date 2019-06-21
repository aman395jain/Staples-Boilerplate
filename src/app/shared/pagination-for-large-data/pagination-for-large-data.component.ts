import { Component, OnInit } from "@angular/core";
import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";
import { PaginationForLongDataService } from "src/app/services/pagination-for-longData/pagination-for-long-data.service";

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
