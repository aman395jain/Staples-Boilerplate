import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Loglist } from "../../models/loglist.model";

@Injectable()
export class LoglistingService {
  private serviceUrl = "http://www.mocky.io/v2/5cac66ee300000b723103596";

  constructor(private http: HttpClient) {}

  getLogList(): Observable<Loglist[]> {
    return this.http.get<Loglist[]>(this.serviceUrl);
  }
}
