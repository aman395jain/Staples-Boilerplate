import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable()
export class NavBarService {
  private _elementNameSubject = new Subject<any>();
  constructor() {}

  setElementNameFromSideBar(eleName) {
    this._elementNameSubject.next(eleName);
  }

  getElementName(): Observable<any> {
    return this._elementNameSubject.asObservable();
  }
}
