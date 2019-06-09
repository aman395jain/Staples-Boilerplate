import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class LogModalDataService {
  private printedLogData = new BehaviorSubject<any>(null);
  private logDetailFlag = new Subject<Boolean>();

  constructor() {}

  getLogModalData(row) {
    this.printedLogData.next(row);
  }

  setLogModalData(): Observable<any> {
    return this.printedLogData;
  }

  getLogDetailFlag(flag) {
    this.logDetailFlag.next(flag);
  }
  setLogDetailFlag() {
    return this.logDetailFlag.asObservable();
  }
}
