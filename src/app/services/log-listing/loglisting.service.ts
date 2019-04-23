import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { map, catchError } from "rxjs/operators";

import { Loglist } from "../../models/loglist.model";
import { Observable, BehaviorSubject } from "rxjs";

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
  private _dataToBePrinted = new BehaviorSubject<any>(null);

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
    if (entity === "Price_Prompt_SKUs") {
      this._serviceUrl = "http://www.mocky.io/v2/5cac66ee300000b723103596";
    } else if (entity === "Employee") {
      this._serviceUrl = "http://www.mocky.io/v2/5cac66ee300000b723103596";
    } else if (entity === "Tax_Rates") {
      this._serviceUrl = "http://www.mocky.io/v2/5cac66ee300000b723103596";
    } else if (entity === "Hardware_SKUs") {
      this._serviceUrl = "http://www.mocky.io/v2/5cb860794c0000c51ad3d50d";
    } else if (entity === "Linked_SKUs") {
      this._serviceUrl = "http://www.mocky.io/v2/5cb860794c0000c51ad3d50d";
    } else if (entity === "Free_SKUs") {
      this._serviceUrl = "http://www.mocky.io/v2/5cb860794c0000c51ad3d50d";
    } else if (entity === "Age_Restricted_Special_rest") {
      this._serviceUrl = "http://www.mocky.io/v2/5cb860794c0000c51ad3d50d";
    } else if (entity === "Return_Driver_License") {
      this._serviceUrl = "http://www.mocky.io/v2/5cb860794c0000c51ad3d50d";
    } else if (entity === "Lowest_Price") {
      this._serviceUrl = "http://www.mocky.io/v2/5cb860794c0000c51ad3d50d";
    } else if (entity === "POSA") {
      this._serviceUrl = "http://www.mocky.io/v2/5cb860794c0000c51ad3d50d";
    } else if (entity === "Order") {
      this._serviceUrl = "http://www.mocky.io/v2/5cb860794c0000c51ad3d50d";
    } else {
      this._serviceUrl = "http://www.mocky.io/v2/5cb860794c0000c51ad3d50d";
    }
    return this.http.get<Loglist[]>(this._serviceUrl);
  }

  getTestDataToPrint(printedData) {
    this._dataToBePrinted.next(printedData);
  }

  setTestDataToPrint(): Observable<any> {
    return this._dataToBePrinted;
  }
}
