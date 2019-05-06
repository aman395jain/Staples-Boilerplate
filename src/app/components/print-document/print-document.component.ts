import { Component, OnInit } from "@angular/core";

import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { LoglistingService } from "src/app/services/log-listing/loglisting.service";
import { DashboardHeaderNameConverstionService } from "src/app/services/dashboard-header-name-conversion/dashboard-header-name-converstion.service";

@Component({
  selector: "app-print-document",
  templateUrl: "./print-document.component.html",
  styleUrls: ["./print-document.component.scss"]
})
export class PrintDocumentComponent implements OnInit {
  dataForPrint: {};
  keysForPrintedTable = [];
  printedDataNew = {};

  rowTableData = [];

  constructor(
    private _printService: PrintDocumentService,
    private _loglistingService: LoglistingService,
    private _dashboardHeaderNameConverstionService: DashboardHeaderNameConverstionService
  ) {}

  ngOnInit() {
    this._printService.onDataReady();
    this._loglistingService.setTestDataToPrint().subscribe(printedData => {
      try {
        if (printedData.length > 0) {
          this.dataForPrint = printedData;
          this.rowTableData = Object.keys(printedData[0]);
          this.printedDataNew = this._dashboardHeaderNameConverstionService.headerNameConvert(
            printedData
          );
          this.keysForPrintedTable = Object.keys(this.printedDataNew[0]);
        }
      } catch (e) {}
    });
  }
}
