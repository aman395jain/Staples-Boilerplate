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
  private _dataToBePrinted = new BehaviorSubject<any>(null);
  private _serviceUrl = "";
  private _serviceUrlparams = {};
  private _tax_exempt_status = "";

  constructor(private http: HttpClient) {}

  getLogListForEntity(entity, index): Observable<any> {
    if (entity === "Price_Prompt_SKUs") {
      this._serviceUrl = logTableAPIUrls.getPricePromptSKUs;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "Item_Master") {
      this._serviceUrl = logTableAPIUrls.getItemMasterMain;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "Employee") {
      this._serviceUrl = logTableAPIUrls.getEmployee;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "Tax_Rates") {
      this._serviceUrl = logTableAPIUrls.getTaxRate;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "Hardware_SKUs") {
      this._serviceUrl = logTableAPIUrls.getHardwareSKUs;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "Linked_SKUs") {
      this._serviceUrl = logTableAPIUrls.getLinkedSKUs;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "Age_Restricted_Special_rest") {
      this._serviceUrl = logTableAPIUrls.getAgeRestrictiedSpecialRest;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "Item_Group") {
      this._serviceUrl = logTableAPIUrls.getItemGroup;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "Return_Driver_License") {
      this._serviceUrl = logTableAPIUrls.getReturnDrivingLicense;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "Lowest_Price") {
      this._serviceUrl = logTableAPIUrls.getLowestPrice;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "Promos") {
      this._serviceUrl = logTableAPIUrls.getPromos;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "Recycle_Fee_SKUs") {
      this._serviceUrl = logTableAPIUrls.getRecycleFeeSKUs;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "Bag_Fee_SKUs") {
      this._serviceUrl = logTableAPIUrls.getBagFeeSKUs;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "ESP_Skus") {
      this._serviceUrl = logTableAPIUrls.getEspSkus;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "Tax_Exempt") {
      this._serviceUrl = logTableAPIUrls.getTaxExempt;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "Tax_Exempt_Valid") {
      this._serviceUrl = logTableAPIUrls.getTaxExemptValid;
      this._serviceUrlparams = {
        pageNumber: index,
        status: "Valid"
      };
      console.log(this, "this._serviceUrlparams");
    } else if (entity === "Tax_Exempt_Expired") {
      this._serviceUrl = logTableAPIUrls.getTaxExemptExpired;
      this._serviceUrlparams = {
        pageNumber: index,
        status: "Expired"
      };
    } else if (entity === "Tax_Exempt_About_To_Expired") {
      this._serviceUrl = logTableAPIUrls.getTaxExemptAboutToExpired;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "Tax_Exempt_Deactivated") {
      this._serviceUrl = logTableAPIUrls.getTaxExemptDeactivate;
      this._serviceUrlparams = {
        pageNumber: index,
        status: "Deactivated"
      };
    } else if (entity === "Tax_Exempt_Not_Validated") {
      this._serviceUrl = logTableAPIUrls.getTaxExemptNotValidated;
      this._serviceUrlparams = {
        pageNumber: index,
        status: "Not Validated"
      };
    } else if (entity === "Tax_Exempt_Incomplete") {
      this._serviceUrl = logTableAPIUrls.getTaxExemptIncomplete;
      this._serviceUrlparams = {
        pageNumber: index,
        status: "Incomplete"
      };
    } else if (entity === "POSA") {
      //changes reqired according to service
      this._serviceUrl = logTableAPIUrls.getPOSA;
      this._serviceUrlparams = { pageNumber: index };
    } else if (entity === "Order") {
      //changes reqired according to service
      this._serviceUrl = logTableAPIUrls.getOrder;
      this._serviceUrlparams = { pageNumber: index };
    } else {
      this._serviceUrl = logTableAPIUrls.getOrder;
      this._serviceUrlparams = { pageNumber: index };
    }
    return this.http.post<any>(this._serviceUrl, this._serviceUrlparams).pipe(
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
