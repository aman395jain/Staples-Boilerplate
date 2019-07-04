import { Injectable } from "@angular/core";
import { BehaviorSubject, ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PaginationForLongDataService {
  private _indexPagination = new BehaviorSubject<any>(null);
  private _indexPaginationForBar = new BehaviorSubject<any>(null);
  private _totalRows = new ReplaySubject<number>(1);

  constructor() {}

  getIndexPagination(index) {
    this._indexPagination.next(index);
  }

  setIndexPagination() {
    return this._indexPagination;
  }

  getPaginationIndexForBar(index) {
    this._indexPaginationForBar.next(index);
  }

  setPaginationIndexForBar() {
    return this._indexPaginationForBar;
  }

  getNumberOfRowsForPagination(totalIndex) {
    this._totalRows.next(totalIndex);
  }

  setNumberOfRowsForPagination() {
    return this._totalRows;
  }
}
