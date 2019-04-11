import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Loglist } from "../../models/loglist.model";

@Injectable()
export class LoglistingService {
  private _serviceUrl = "";

  constructor(private http: HttpClient) {}

  getLogList(): Observable<Loglist[]> {
    this._serviceUrl = "http://www.mocky.io/v2/5cac66ee300000b723103596";
    return this.http.get<Loglist[]>(this._serviceUrl);
  }

  getLogListForEntity(entity): Observable<Loglist[]> {
    console.log("in the loglist service", entity);
    if (entity === "Master") {
      this._serviceUrl = "http://www.mocky.io/v2/5cac66ee300000b723103596";
    } else {
      this._serviceUrl = "http://www.mocky.io/v2/5cadb0fb2f00003d203a96ed";
    }
    return this.http.get<Loglist[]>(this._serviceUrl);
  }
}
