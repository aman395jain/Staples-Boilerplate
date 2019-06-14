import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { map, catchError } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";
// import { LoggerModule, NgxLoggerLevel, NGXLogger } from "ngx-logger";

import { Loglist } from "../../models/loglist.model";
import { dataUrls } from "../../utils/dataApiUrls.enum";

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

  getLogList(): Observable<any> {
    this._serviceUrl = dataUrls.getItemMaster;
    return this.http.get<any>(this._serviceUrl).pipe(
      map((response: Response) => {
        // console.log("in the service", response[0]);
        return response;
      }),
      catchError((err: Response) => {
        console.log("in the error", err.status);
        return null;
      })
    );
  }

  getLogListForEntity(entity): Observable<any> {
    if (entity === "Price_Prompt_SKUs") {
      this._serviceUrl = dataUrls.getPricePromptSKUs;
    } else if (entity === "Item_Master") {
      this._serviceUrl = dataUrls.getItemMasterMain;
    } else if (entity === "Employee") {
      this._serviceUrl = dataUrls.getEmployee;
    } else if (entity === "Tax_Rates") {
      this._serviceUrl = dataUrls.getTaxRate;
    } else if (entity === "Hardware_SKUs") {
      this._serviceUrl = dataUrls.getHardwareSKUs;
    } else if (entity === "Linked_SKUs") {
      this._serviceUrl = dataUrls.getLinkedSKUs;
    } else if (entity === "Free_SKUs") {
      this._serviceUrl = dataUrls.getFreeSKUs;
    } else if (entity === "Age_Restricted_Special_rest") {
      this._serviceUrl = dataUrls.getAgeRestrictiedSpecialRest;
    } else if (entity === "Item_Group") {
      this._serviceUrl = dataUrls.getItemGroup;
    } else if (entity === "Return_Driver_License") {
      this._serviceUrl = dataUrls.getReturnDrivingLicence;
    } else if (entity === "Lowest_Price") {
      this._serviceUrl = dataUrls.getLowestPrice;
    } else if (entity === "Promos") {
      this._serviceUrl = dataUrls.getPromos;
    } else if (entity === "Tax_Exempt") {
      this._serviceUrl = dataUrls.getTaxExempt;
    } else if (entity === "POSA") {
      //changes reqired according to service
      this._serviceUrl = dataUrls.getPOSA;
    } else if (entity === "Order") {
      //changes reqired according to service
      this._serviceUrl = dataUrls.getOrder;
    } else {
      this._serviceUrl = dataUrls.getOrder;
    }
    return this.http.get<any>(this._serviceUrl).pipe(
      map((response: Response) => {
        console.log("in the service", response[0]);
        return response;
      }),
      catchError((err: Response) => {
        console.log("in the error", err.status);
        return null;
      })
    );
  }

  postDataForPromos(promoId) {
    return this.http.post("", promoId).pipe(
      catchError((err: Response) => {
        console.log("in the error", err.status);
        return null;
      })
    );
  }

  postDataForKioskOrder(formData) {
    return this.http.post("", formData).pipe(
      catchError((err: Response) => {
        console.log("in the error", err.status);
        return null;
      })
    );
  }

  getDataForPromosJustForTest(): any {
    return this.http
      .get("http://www.mocky.io/v2/5cf905a23400008a2e01b322")
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

  getTestDataToPrint(printedData) {
    this._dataToBePrinted.next(printedData);
  }

  setTestDataToPrint(): Observable<any> {
    return this._dataToBePrinted;
  }
}
