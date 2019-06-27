import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PaginationForLongDataService {
  private _indexPagination = new BehaviorSubject<any>(null);

  constructor() {}

  getIndexPagination(index) {
    this._indexPagination.next(index);
  }

  setIndexPagination() {
    return this._indexPagination;
  }
}
