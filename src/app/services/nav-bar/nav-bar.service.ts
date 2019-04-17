import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

/**
 * @ngdoc service
 * @name NavBarService
 *
 * @description
 * Service for sharing the data from side nav bar and header component.
 **/

@Injectable()
export class NavBarService {
  private _elementNameSubject = new Subject<any>();
  private _toggleStatusSubject = new Subject<any>();
  constructor() {}

  /*
  * setElementNameFromSideBar: set the name of element for which the data table will display.
  * eleName: is the name of table from side nav bar.
  */
  setElementNameFromSideBar(eleName) {
    this._elementNameSubject.next(eleName);
  }

  /*
  * getElementName: return the table name as observable.
  */
  getElementName(): Observable<any> {
    return this._elementNameSubject.asObservable();
  }

  /*
  * setToggleStatus: set the toggle status from header.
  * toggleStatus: is the toggle status.
  */
  setToggleStatus(toggleStatus) {
    // console.log("in the nav bar service toggle", toggleStatus);
    this._toggleStatusSubject.next(toggleStatus);
  }

  /*
  * getToggleStatus: return the toggle status as observable.
  */
  getToggleStatus(): Observable<any> {
    return this._toggleStatusSubject.asObservable();
  }
}
