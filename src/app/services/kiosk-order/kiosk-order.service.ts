import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class KioskOrderService {
  constructor(private http: HttpClient) {}

  postDataForKioskOrder(formData) {
    return this.http.post("", formData).pipe(
      catchError((err: Response) => {
        console.log("in the error", err.status);
        return null;
      })
    );
  }

  getDataForKioskForm(fileName) {
    return this.http.get("http://www.mocky.io/v2/" + fileName).pipe(
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
