import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class LogModalDataService {
  private printedLogData = new BehaviorSubject<any>(null);

  constructor() {}

  getLogModalData(row) {
    this.printedLogData.next(row);
  }

  setLogModalData(): Observable<any> {
    return this.printedLogData;
  }
}
