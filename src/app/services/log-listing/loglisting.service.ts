import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { map, catchError, debounceTime } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";
// import { LoggerModule, NgxLoggerLevel, NGXLogger } from "ngx-logger";

import { Loglist } from "../../models/loglist.model";
import { logTableAPIUrls } from "../../utils/logTableApiUrls.enum";

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

  getLogListForEntity(entity, index): Observable<any> {
    if (entity === "Price_Prompt_SKUs") {
      this._serviceUrl = logTableAPIUrls.getPricePromptSKUs;
    } else if (entity === "Item_Master") {
      this._serviceUrl = logTableAPIUrls.getItemMasterMain;
    } else if (entity === "Employee") {
      this._serviceUrl = logTableAPIUrls.getEmployee;
    } else if (entity === "Tax_Rates") {
      this._serviceUrl = logTableAPIUrls.getTaxRate;
    } else if (entity === "Hardware_SKUs") {
      this._serviceUrl = logTableAPIUrls.getHardwareSKUs;
    } else if (entity === "Linked_SKUs") {
      this._serviceUrl = logTableAPIUrls.getLinkedSKUs;
    } else if (entity === "Age_Restricted_Special_rest") {
      this._serviceUrl = logTableAPIUrls.getAgeRestrictiedSpecialRest;
    } else if (entity === "Item_Group") {
      this._serviceUrl = logTableAPIUrls.getItemGroup;
    } else if (entity === "Return_Driver_License") {
      this._serviceUrl = logTableAPIUrls.getReturnDrivingLicense;
    } else if (entity === "Lowest_Price") {
      this._serviceUrl = logTableAPIUrls.getLowestPrice;
    } else if (entity === "Promos") {
      this._serviceUrl = logTableAPIUrls.getPromos;
    } else if (entity === "Recycle_Fee_SKUs") {
      this._serviceUrl = logTableAPIUrls.getRecycleFeeSKUs;
    } else if (entity === "Bag_Fee_SKUs") {
      this._serviceUrl = logTableAPIUrls.getBagFeeSKUs;
    } else if (entity === "ESP_Skus") {
      this._serviceUrl = logTableAPIUrls.getEspSkus;
    } else if (entity === "Tax_Exempt") {
      this._serviceUrl = logTableAPIUrls.getTaxExempt;
    } else if (entity === "Tax_Exempt_Valid") {
      this._serviceUrl = logTableAPIUrls.getTaxExemptValid;
    } else if (entity === "Tax_Exempt_Expired") {
      this._serviceUrl = logTableAPIUrls.getTaxExemptExpired;
    } else if (entity === "Tax_Exempt_About_To_Expired") {
      this._serviceUrl = logTableAPIUrls.getTaxExemptAboutToExpired;
    } else if (entity === "CBP") {
      this._serviceUrl = logTableAPIUrls.getCBP;
    } else if (entity === "Tax_Exempt_Deactivated") {
      this._serviceUrl = logTableAPIUrls.getTaxExemptDeactivate;
    } else if (entity === "POSA") {
      //changes reqired according to service
      this._serviceUrl = logTableAPIUrls.getPOSA;
    } else if (entity === "Order") {
      //changes reqired according to service
      this._serviceUrl = logTableAPIUrls.getOrder;
    } else {
      this._serviceUrl = logTableAPIUrls.getOrder;
    }
    return this.http.post<any>(this._serviceUrl, { pageNumber: index }).pipe(
      debounceTime(1000),
      map((response: Response) => {
        // console.log("in the service", response);
        return response;
      }),
      catchError((err: Response) => {
        console.log("in the error", err.status);
        return null;
      })
    );
  }

  postLinkedListSKUs(linkedSku) {
    return this.http
      .get("http://lrtdqnasv104:8090/tdmapp/linkedSkus?sku=" + linkedSku)
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

  getItemGroupData(groupId): any {
    return this.http
      .get(logTableAPIUrls.getItemGroupData + "?groupId=" + groupId)
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

  getDataForPromos(id): any {
    return this.http
      .get("http://lrtdqnasv104:8090/tdmapp/promoGroupList?promoId=" + id)
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
