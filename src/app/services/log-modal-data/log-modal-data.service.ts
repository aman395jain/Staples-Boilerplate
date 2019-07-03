import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class LogModalDataService {
  private printedLogData = new BehaviorSubject<any>(null);
  private logDetailData = new BehaviorSubject<any>(null);
  private logDetailFlag = new Subject<Boolean>();
  private kioskOrderFlag = new Subject<Boolean>();
  private linkedSKUsData = new Subject<Boolean>();
  private promoData = new BehaviorSubject<any>(null);
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

  getKioskOrderFlag(flag) {
    this.kioskOrderFlag.next(flag);
  }

  setKioskOrderFlag() {
    return this.kioskOrderFlag.asObservable();
  }

  getLinkedSKUsData(data) {
    this.linkedSKUsData.next(data);
  }

  setLinkedSKUsData() {
    return this.linkedSKUsData.asObservable();
  }

  getPrintDataForPromos(data) {
    this.promoData.next(data);
  }

  setPrintDataForPromos() {
    return this.promoData;
  }
}
