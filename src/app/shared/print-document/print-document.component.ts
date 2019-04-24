import { Component, OnInit } from "@angular/core";

import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { LoglistingService } from "src/app/services/log-listing/loglisting.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-print-document",
  templateUrl: "./print-document.component.html",
  styleUrls: ["./print-document.component.scss"]
})
export class PrintDocumentComponent implements OnInit {
  _dataForPrint: {};
  _keysForPrintedTable = [];
  _rowsForPrint = {};
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
      } else {
        console.log("in the print component", printedData.length);
      }
    });
  }
}
