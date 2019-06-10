import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LogDescriptionDataOrderService {
  private dataToBeDisplayedOnModal: any[] = [];
  private mainDataToDisplay: object = {};
  private rowDataWithLinkedSKUs: object = {};
  private tableName: string = "";

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
  modalDataOrder(row, tableName) {
    let rowDataWithRestData = {};
    Object.assign(rowDataWithRestData, row);
    if (tableName === "Item_Master") {
      this.mainDataToDisplay = {
        sku: row.sku,
        upcList: row.upcList,
        itemDesc: row.itemDesc,
        permPrice: row.permPrice,
        store: row.store
      };
      delete rowDataWithRestData["sku"];
      delete rowDataWithRestData["upcList"];
      delete rowDataWithRestData["itemDesc"];
      delete rowDataWithRestData["permPrice"];
      delete rowDataWithRestData["store"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Price_Prompt_SKUs") {
      this.mainDataToDisplay = {
        sku: row.sku,
        upcList: row.upcList,
        itemDesc: row.itemDesc,
        permPrice: row.permPrice
      };
      delete rowDataWithRestData["sku"];
      delete rowDataWithRestData["upcList"];
      delete rowDataWithRestData["itemDesc"];
      delete rowDataWithRestData["permPrice"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Hardware_SKUs") {
      this.mainDataToDisplay = {
        sku: row.sku,
        upcList: row.upcList,
        itemDesc: row.itemDesc,
        retailPrice: row.retailPrice,
        vendorName: row.vendorName
      };
      delete rowDataWithRestData["sku"];
      delete rowDataWithRestData["upcList"];
      delete rowDataWithRestData["itemDesc"];
      delete rowDataWithRestData["retailPrice"];
      delete rowDataWithRestData["vendorName"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Linked_SKUs") {
      this.mainDataToDisplay = {
        sku: row.sku,
        upcList: row.upcList,
        warranty: row.warranty,
        retailPrice: row.retailPrice,
        associateGrpId: row.associateGrpId
      };
      this.rowDataWithLinkedSKUs = {
        linkedList: row.linkedList
      };
      delete rowDataWithRestData["sku"];
      delete rowDataWithRestData["upcList"];
      delete rowDataWithRestData["warranty"];
      delete rowDataWithRestData["retailPrice"];
      delete rowDataWithRestData["associateGrpId"];
      delete rowDataWithRestData["linkedList"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      this.dataToBeDisplayedOnModal[2] = this.rowDataWithLinkedSKUs;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Free_SKUs") {
      this.mainDataToDisplay = {
        sku: row.sku,
        itemDesc: row.itemDesc,
        posId: row.posId,
        permPrice: row.permPrice,
        freeSku: row.freeSku,
        freeSkuPrice: row.freeSkuPrice
      };
      delete rowDataWithRestData["sku"];
      delete rowDataWithRestData["itemDesc"];
      delete rowDataWithRestData["posId"];
      delete rowDataWithRestData["permPrice"];
      delete rowDataWithRestData["freeSku"];
      delete rowDataWithRestData["freeSkuPrice"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Age_Restricted_Special_rest") {
      this.mainDataToDisplay = {
        sku: row.sku,
        itemDesc: row.itemDesc,
        upcList: row.upcList,
        retailPrice: row.retailPrice,
        alertCode: row.alertCode
      };
      delete rowDataWithRestData["sku"];
      delete rowDataWithRestData["itemDesc"];
      delete rowDataWithRestData["upcList"];
      delete rowDataWithRestData["retailPrice"];
      delete rowDataWithRestData["alertCode"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Employee") {
      this.mainDataToDisplay = {
        emplName: row.emplName,
        emplId: row.emplId,
        emplRole: row.emplRole,
        store: row.store
      };
      delete rowDataWithRestData["emplName"];
      delete rowDataWithRestData["emplId"];
      delete rowDataWithRestData["emplRole"];
      delete rowDataWithRestData["store"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Tax_Rates") {
      this.mainDataToDisplay = {
        store: row.store,
        rate: row.rate,
        state: row.state
      };
      delete rowDataWithRestData["store"];
      delete rowDataWithRestData["rate"];
      delete rowDataWithRestData["state"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    } else if (tableName === "Promos") {
      this.mainDataToDisplay = {
        promoNum: row.promoNum,
        promoName: row.promoName,
        discountName: row.discountName,
        discountType: row.discountType,
        discountDesc: row.discountDesc,
        promoStartDate: row.promoStartDate,
        promoEndDate: row.promoEndDate
      };
      delete rowDataWithRestData["promoNum"];
      delete rowDataWithRestData["promoName"];
      delete rowDataWithRestData["discountName"];
      delete rowDataWithRestData["discountType"];
      delete rowDataWithRestData["discountDesc"];
      delete rowDataWithRestData["promoStartDate"];
      delete rowDataWithRestData["promoEndDate"];

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;
    }
  }

  /**
   * Restrict the searching according to dashboard colunms.
   * @param tableName
   */
  filterRestrictionOnlyForDisplayedRows(tableName) {
    if (tableName === "Item_Master") {
      return function(data, filter: string): boolean {
        if (data.permPrice) {
          return (
            data.sku.toLowerCase().includes(filter) ||
            data.itemDesc.toLowerCase().includes(filter) ||
            data.permPrice.toString().includes(filter) ||
            data.upcList[0].toString() === filter ||
            data.store
              .toString()
              .toLowerCase()
              .includes(filter)
          );
        } else {
          return (
            data.sku.toLowerCase().includes(filter) ||
            data.itemDesc.toLowerCase().includes(filter) ||
            data.retailPrice.toString().includes(filter) ||
            data.upcList[0] === filter ||
            data.store
              .toString()
              .toLowerCase()
              .includes(filter)
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
            data.upcList[0].toString() === filter ||
            data.store
              .toString()
              .toLowerCase()
              .includes(filter)
          );
        } else {
          return (
            data.sku.toLowerCase().includes(filter) ||
            data.itemDesc.toLowerCase().includes(filter) ||
            data.retailPrice.toString().includes(filter) ||
            data.upcList[0] === filter ||
            data.store
              .toString()
              .toLowerCase()
              .includes(filter)
          );
        }
      };
    } else if (tableName === "Employee") {
      return function(data, filter: string): boolean {
        return (
          data.emplName.toLowerCase().includes(filter) ||
          data.password.toLowerCase().includes(filter) ||
          data.emplRole.toString().includes(filter) ||
          data.store.toString().includes(filter)
        );
      };
    } else if (tableName === "Linked_SKUs") {
      return function(data, filter: string): boolean {
        return (
          data.sku.toLowerCase().includes(filter) ||
          data.retailPrice.toString().includes(filter) ||
          data.posId.toString().includes(filter) ||
          data.warranty
            .toString()
            .toLowerCase()
            .includes(filter) ||
          data.itemGroupID.toString() === filter ||
          data.store
            .toString()
            .toLowerCase()
            .includes(filter)
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
          data.upcList[0].includes(filter) ||
          data.store
            .toString()
            .toLowerCase()
            .includes(filter)
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
          data.freeSkuPrice.includes(filter) ||
          data.store
            .toString()
            .toLowerCase()
            .includes(filter)
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
          data.alertCode === filter ||
          data.store
            .toString()
            .toLowerCase()
            .includes(filter)
        );
      };
    }
  }
}