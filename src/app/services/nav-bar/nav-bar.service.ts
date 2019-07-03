import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject, ReplaySubject } from "rxjs";

/**
 * @ngdoc service
 * @name NavBarService
 * @description
 * Service for sharing the data from side nav bar and header component.
 **/

@Injectable()
export class NavBarService {
  private _elementNameSubject = new ReplaySubject<any>(1);
  private _toggleStatusSubject = new Subject<any>();
  private _pageSizeSubject = new Subject<any>();
  private _pageLengthSubject = new Subject<any>();
  private advanceSearchStatus = new BehaviorSubject<boolean>(null);
  private indexPagination = new BehaviorSubject<number>(null);
  constructor() {}

  /**
   * setElementNameFromSideBar: set the name of element for which the data table will display.
   * eleName: is the name of table from side nav bar.
   */
  setElementNameFromSideBar(eleName) {
    this._elementNameSubject.next(eleName);
  }

  /**
   * getElementName: return the table name as observable.
   */
  getElementName(): Observable<any> {
    return this._elementNameSubject;
  }

  getPageForIndexPagination(number) {
    this.indexPagination.next(number);
  }

  setPageForIndexPagination() {
    return this.indexPagination;
  }

  /**
   * setToggleStatus: set the toggle status from header.
   * toggleStatus: is the toggle status.
   */
  setToggleStatus(toggleStatus) {
    // console.log("in the nav bar service toggle", toggleStatus);
    this._toggleStatusSubject.next(toggleStatus);
  }

  /**
   * getToggleStatus: return the toggle status as observable.
   */
  getToggleStatus(): Observable<any> {
    return this._toggleStatusSubject.asObservable();
  }

  setPageSize(pSize) {
    this._pageSizeSubject.next(pSize);
  }

  setPageLength(pLength) {
    // console.log(pLength);
    this._pageLengthSubject.next(pLength);
  }

  getPageLength(): Observable<any> {
    return this._pageLengthSubject.asObservable();
  }

  getPageSize(): Observable<any> {
    return this._pageSizeSubject.asObservable();
  }

  getAdvanceSearchStatus(status) {
    // console.log("in the service advance search status", status);
    this.advanceSearchStatus.next(status);
  }

  setAdvanceSearchStatus() {
    return this.advanceSearchStatus;
  }
}
