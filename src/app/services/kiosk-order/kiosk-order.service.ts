import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

import { kioskOrderUrls } from "../../utils/kioskOrderApiUrls.enum";

@Injectable()
export class KioskOrderService {
  constructor(private http: HttpClient) {}

  postDataForKioskOrder(formData) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http
      .post(kioskOrderUrls.postKioskOrderForm, formData, httpOptions)
      .pipe(
        catchError((err: Response) => {
          console.log("in the error", err.status);
          return null;
        })
      );
  }

  getDataForKioskForm(fileName) {
    return this.http
      .get(kioskOrderUrls.getInitialKioskFormData + "?fileName=" + fileName)
      .pipe(
        map((response: Response) => {
          return response;
        }),
        catchError((err: Response) => {
          console.log("in the error", err.status);
          return null;
        })
      );
  }
}
