import { Component, OnInit } from "@angular/core";

import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { LoglistingService } from "src/app/services/log-listing/loglisting.service";

@Component({
  selector: "app-print-document",
  templateUrl: "./print-document.component.html",
  styleUrls: ["./print-document.component.scss"]
})
export class PrintDocumentComponent implements OnInit {
  _dataForPrint: {};
  _keysForPrintedTable = [];
  _rowsForPrint = {};
  keyMap = {
    barCode: "BAR CODE",
    itemDesc: "ITEM DESCRIPION",
    permPrice: "PREM PRICE",
    posId: "POSITION ID",
    profit: "PROFIT",
    sellPrice: "SELL PRICE",
    sku: "SKU",
    state: "STATE",
    store: "STORE",
    empName: "EMPLOYEE NAME",
    empPass: "PASSWORD",
    empRole: "EMPLOYEE ROLE",
    taxRate: "TAX RATE",
    taxState: "TAX STATE",
    freeSku: "FREE SKUs",
    freeSkuPrice: "FREE SKU PRICE",
    itemGroupID: "ITEM GROUP ID",
    warranty: "WARRANTY"
  };
  printedDataNew = {};

  constructor(
    private printService: PrintDocumentService,
    private loglistingService: LoglistingService
  ) {}

  ngOnInit() {
    this.printService.onDataReady();
    // debugger;
    this.loglistingService.setTestDataToPrint().subscribe(printedData => {
      if (printedData.length > 0) {
        this._dataForPrint = printedData;
        this._keysForPrintedTable = Object.keys(printedData[0]);
        this.printedDataNew = printedData.map(data => {
          return Object.keys(data).reduce((prev, next) => {
            if (next in this.keyMap) {
              prev[this.keyMap[next]] = data[next];
            } else {
              prev[next] = data[next];
            }
            return prev;
          }, {});
        });

        console.log("printed data", this.printedDataNew);
      } else {
        console.log("in the print component", printedData.length);
      }
    });
  }
}
