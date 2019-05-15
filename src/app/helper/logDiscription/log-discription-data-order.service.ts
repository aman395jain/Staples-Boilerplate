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

  /**
   * For classification of data of Modal.
   * @param row
   */
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

  filterRestrictionOnlyForDisplayedRows(tableName) {
    if (tableName === "Item_Master") {
      return function(data, filter: string): boolean {
        if (data.permPrice) {
          return (
            data.sku.toLowerCase().includes(filter) ||
            data.itemDesc.toLowerCase().includes(filter) ||
            data.permPrice.toString().includes(filter) ||
            data.upcList[0].toString() === filter
          );
        } else {
          return (
            data.sku.toLowerCase().includes(filter) ||
            data.itemDesc.toLowerCase().includes(filter) ||
            data.retailPrice.toString().includes(filter) ||
            data.upcList[0] === filter
          );
        }
      };
    } else if (tableName === "Price_Prompt_SKUs") {
      return function(data, filter: string): boolean {
        if (data.permPrice) {
          return (
            data.sku.toLowerCase().includes(filter) ||
            data.itemDesc.toLowerCase().includes(filter) ||
            data.permPrice.toString().includes(filter) ||
            data.upcList[0].toString() === filter
          );
        } else {
          return (
            data.sku.toLowerCase().includes(filter) ||
            data.itemDesc.toLowerCase().includes(filter) ||
            data.retailPrice.toString().includes(filter) ||
            data.upcList[0] === filter
          );
        }
      };
    } else if (tableName === "Employee") {
      return function(data, filter: string): boolean {
        return (
          data.emplName.toLowerCase().includes(filter) ||
          data.password.toLowerCase().includes(filter) ||
          data.emplRole.toString().includes(filter) ||
          data.store === filter
        );
      };
    } else if (tableName === "Linked_SKUs") {
      return function(data, filter: string): boolean {
        return (
          data.sku.toLowerCase().includes(filter) ||
          data.permPrice.toString().includes(filter) ||
          data.posId.toString().includes(filter) ||
          data.warranty
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.itemGroupID.toString() === filter
        );
      };
    } else if (tableName === "Tax_Rates") {
      return function(data, filter: string): boolean {
        return (
          data.store
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.rate
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.state
            .toString()
            .toLowerCase()
            .includes(filter)
        );
      };
    } else if (tableName === "Hardware_SKUs") {
      // Need to add Vendor Name check
      return function(data, filter: string): boolean {
        return (
          data.sku
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.itemDesc
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.retailPrice
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.upcList[0].includes(filter)
        );
      };
    } else if (tableName === "Free_SKUs") {
      return function(data, filter: string): boolean {
        return (
          data.sku
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.itemDesc
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.permPrice
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.posId.includes(filter) ||
          data.freeSku.includes(filter) ||
          data.freeSkuPrice.includes(filter)
        );
      };
    } else if (tableName === "Age_Restricted_Special_rest") {
      return function(data, filter: string): boolean {
        return (
          data.sku
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.itemDesc
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.retailPrice
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.upcList[0] === filter ||
          data.alertCode === filter
        );
      };
    }
  }
}
