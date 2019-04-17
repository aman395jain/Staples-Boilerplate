import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { map, catchError } from "rxjs/operators";

import { Loglist } from "../../models/loglist.model";

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

  constructor(private http: HttpClient) {}

  getLogList(): Observable<Loglist[]> {
    this._serviceUrl = "http://www.mocky.io/v2/5cb6bba3320000510ecd4563";
    return this.http.get<Loglist[]>(this._serviceUrl).pipe(
      map((response: Response) => {
        console.log("in the service", response);
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
    if (entity === "Master") {
      this._serviceUrl = "http://www.mocky.io/v2/5cac66ee300000b723103596";
    } else {
      this._serviceUrl = "http://www.mocky.io/v2/5cadb0fb2f00003d203a96ed";
    }
    return this.http.get<Loglist[]>(this._serviceUrl);
  }
}
