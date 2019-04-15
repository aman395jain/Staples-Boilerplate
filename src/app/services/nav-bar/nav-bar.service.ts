import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable()
export class NavBarService {
  private _elementNameSubject = new Subject<any>();
  private _toggleStatusSubject = new Subject<any>();
  constructor() {}

  setElementNameFromSideBar(eleName) {
    this._elementNameSubject.next(eleName);
  }

  getElementName(): Observable<any> {
    return this._elementNameSubject.asObservable();
  }

  setToggleStatus(toggleStatus) {
    console.log("in the nav bar service toggle", toggleStatus);
    this._toggleStatusSubject.next(toggleStatus);
  }

  getToggleStatus(): Observable<any> {
    return this._toggleStatusSubject.asObservable();
  }
}
