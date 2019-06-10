import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class LogModalDataService {
  private printedLogData = new BehaviorSubject<any>(null);
  private logDetailData = new BehaviorSubject<any>(null);
  private logDetailFlag = new Subject<Boolean>();
  private tableNameForLogDetail = new BehaviorSubject<any>(null);

  constructor() {}

  getLogModalData(row) {
    this.printedLogData.next(row);
  }

  setLogModalData(): Observable<any> {
    return this.printedLogData;
  }

  getLogDetailData(row) {
    this.logDetailData.next(row);
  }

  setLogDetailData(): Observable<any> {
    return this.logDetailData;
  }

  getTableNameForLogDetail(tableName) {
    this.tableNameForLogDetail.next(tableName);
  }

  setTableNameForLogDetail() {
    return this.tableNameForLogDetail;
  }

  getLogDetailFlag(flag) {
    this.logDetailFlag.next(flag);
  }
  setLogDetailFlag() {
    return this.logDetailFlag.asObservable();
  }
}
