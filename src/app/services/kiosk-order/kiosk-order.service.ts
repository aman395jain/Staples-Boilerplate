import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class KioskOrderService {
  constructor(private http: HttpClient) {}

  postDataForKioskOrder(formData) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http
      .post(
        "http://lrtdqnasv104:8090/tdmapp/updateOrderXmlString",
        formData,
        httpOptions
      )
      .pipe(
        catchError((err: Response) => {
          console.log("in the error", err.status);
          return null;
        })
      );
  }

  getDataForKioskForm(fileName) {
    return this.http
      .get("http://lrtdqnasv104:8090/tdmapp/oldXmlData?fileName=" + fileName)
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
