import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LogDiscriptionDataOrderService {
  private dataToBeDisplayedOnModal = [];
  private mainDataToDisplay = {};
  private rowDataWithRestData = {};

  private tableName = "";

  constructor() {}

  tableNameByComponent(tName) {
    this.tableName = tName;
  }

  getTableName() {
    return this.tableName;
  }
  modalDataOrder(row) {
    Object.assign(this.rowDataWithRestData, row);
    if (this.tableName === "Item_Master") {
      this.mainDataToDisplay = {
        sku: row.sku,
        upcList: row.upcList,
        itemDesc: row.itemDesc,
        permPrice: row.permPrice
      };
      delete this.rowDataWithRestData["sku"];
      delete this.rowDataWithRestData["upcList"];
      delete this.rowDataWithRestData["itemDesc"];
      delete this.rowDataWithRestData["permPrice"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = this.rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (this.tableName === "Price_Prompt_SKUs") {
      this.mainDataToDisplay = {
        sku: row.sku,
        upcList: row.upcList,
        itemDesc: row.itemDesc,
        permPrice: row.permPrice
      };
      delete this.rowDataWithRestData["sku"];
      delete this.rowDataWithRestData["upcList"];
      delete this.rowDataWithRestData["itemDesc"];
      delete this.rowDataWithRestData["permPrice"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = this.rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (this.tableName === "Hardware_SKUs") {
      this.mainDataToDisplay = {
        sku: row.sku,
        upcList: row.upcList,
        itemDesc: row.itemDesc,
        retailPrice: row.retailPrice,
        vendorName: row.vendorName
      };
      delete this.rowDataWithRestData["sku"];
      delete this.rowDataWithRestData["upcList"];
      delete this.rowDataWithRestData["itemDesc"];
      delete this.rowDataWithRestData["retailPrice"];
      delete this.rowDataWithRestData["vendorName"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = this.rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (this.tableName === "Linked_SKUs") {
      this.mainDataToDisplay = {
        sku: row.sku,
        posId: row.posId,
        warranty: row.warranty,
        permPrice: row.permPrice,
        itemGroupID: row.itemGroupID
      };
      delete this.rowDataWithRestData["sku"];
      delete this.rowDataWithRestData["posId"];
      delete this.rowDataWithRestData["warranty"];
      delete this.rowDataWithRestData["permPrice"];
      delete this.rowDataWithRestData["itemGroupID"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = this.rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (this.tableName === "Free_SKUs") {
      this.mainDataToDisplay = {
        sku: row.sku,
        itemDesc: row.itemDesc,
        posId: row.posId,
        permPrice: row.permPrice,
        freeSku: row.freeSku,
        freeSkuPrice: row.freeSkuPrice
      };
      delete this.rowDataWithRestData["sku"];
      delete this.rowDataWithRestData["itemDesc"];
      delete this.rowDataWithRestData["posId"];
      delete this.rowDataWithRestData["permPrice"];
      delete this.rowDataWithRestData["freeSku"];
      delete this.rowDataWithRestData["freeSkuPrice"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = this.rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (this.tableName === "Age_Restricted_Special_rest") {
      this.mainDataToDisplay = {
        sku: row.sku,
        itemDesc: row.itemDesc,
        upcList: row.upcList,
        retailPrice: row.retailPrice,
        alertCode: row.alertCode
      };
      delete this.rowDataWithRestData["sku"];
      delete this.rowDataWithRestData["itemDesc"];
      delete this.rowDataWithRestData["upcList"];
      delete this.rowDataWithRestData["retailPrice"];
      delete this.rowDataWithRestData["alertCode"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = this.rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (this.tableName === "Employee") {
      this.mainDataToDisplay = {
        emplName: row.emplName,
        password: row.password,
        emplRole: row.emplRole,
        store: row.store
      };
      delete this.rowDataWithRestData["emplName"];
      delete this.rowDataWithRestData["password"];
      delete this.rowDataWithRestData["emplRole"];
      delete this.rowDataWithRestData["store"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = this.rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (this.tableName === "Tax_Rates") {
      this.mainDataToDisplay = {
        store: row.store,
        rate: row.rate,
        state: row.state
      };
      delete this.rowDataWithRestData["store"];
      delete this.rowDataWithRestData["rate"];
      delete this.rowDataWithRestData["state"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = this.rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    }
  }
}
