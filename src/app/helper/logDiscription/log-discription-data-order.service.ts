import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LogDiscriptionDataOrderService {
  private dataToBeDisplayedOnModal = [];
  mainDataToDisplay = {};
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
      // console.log("in the  this.mainDataToDisplay data------",  this.mainDataToDisplay);
      // console.log("in the row data-------", this.rowDataWithRestData);

      this.dataToBeDisplayedOnModal[0] = this.mainDataToDisplay;

      this.dataToBeDisplayedOnModal[1] = this.rowDataWithRestData;
      return this.dataToBeDisplayedOnModal;

      // console.log("in the row test---------", row);
    }
  }
}
