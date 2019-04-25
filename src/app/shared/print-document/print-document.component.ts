import { Component, OnInit } from "@angular/core";

import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { LoglistingService } from "src/app/services/log-listing/loglisting.service";
import { DashboardHeaderNameConverstionService } from "src/app/services/dashboard-header-name-converstion.service";

@Component({
  selector: "app-print-document",
  templateUrl: "./print-document.component.html",
  styleUrls: ["./print-document.component.scss"]
})
export class PrintDocumentComponent implements OnInit {
  _dataForPrint: {};
  _keysForPrintedTable = [];
  _rowsForPrint = {};
  printedDataNew = {};
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
  _rowTableData = [];

  constructor(
    private printService: PrintDocumentService,
    private loglistingService: LoglistingService,
    private _dashboardHeaderNameConverstionService: DashboardHeaderNameConverstionService
  ) {}

  ngOnInit() {
    this.printService.onDataReady();
    // debugger;
    this.loglistingService.setTestDataToPrint().subscribe(printedData => {
      if (printedData.length > 0) {
        this._dataForPrint = printedData;
        this._rowTableData = Object.keys(printedData[0]);
        this.printedDataNew = this._dashboardHeaderNameConverstionService.headerNameConvert(
          printedData
        );
        this._keysForPrintedTable = Object.keys(this.printedDataNew[0]);
      } else {
        console.log("in the print component", printedData.length);
      }
    });
  }
}
