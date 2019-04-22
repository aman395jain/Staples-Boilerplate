import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { map, catchError } from "rxjs/operators";

import { Loglist } from "../../models/loglist.model";
import { Subject, Observable } from "rxjs";

/**
 * @ngdoc service
 * @name LoglistingService
 *
 * @description
 * Service for API call to populate data in data tables.
 **/

@Injectable()
export class LoglistingService {
  private _serviceUrl = "";
  private testDataToPrintDoc = new Subject<any>();

  constructor(private http: HttpClient) {}

  getLogList(): Observable<Loglist[]> {
    this._serviceUrl = "http://www.mocky.io/v2/5cb6bba3320000510ecd4563";
    return this.http.get<Loglist[]>(this._serviceUrl).pipe(
      map((response: Response) => {
        return response;
      }),
      catchError((err: Response) => {
        console.log("in the error", err.status);
        return null;
      })
    );
  }

  getLogListForEntity(entity): Observable<Loglist[]> {
    // console.log("in the loglist service", entity);
    if (entity === "Price Prompt SKUs") {
      this._serviceUrl = "http://www.mocky.io/v2/5cac66ee300000b723103596";
    } else {
      this._serviceUrl = "http://www.mocky.io/v2/5cb860794c0000c51ad3d50d";
    }
    return this.http.get<Loglist[]>(this._serviceUrl);
  }

  getTestDataToPrint(printedData) {
    this.testDataToPrintDoc.next(printedData);
  }

  setTestDataToPrint(): Observable<any> {
    return this.testDataToPrintDoc.asObservable();
  }
}
