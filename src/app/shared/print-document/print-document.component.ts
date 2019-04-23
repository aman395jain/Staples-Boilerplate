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
  constructor(
    private printService: PrintDocumentService,
    private loglistingService: LoglistingService
  ) {}

  ngOnInit() {
    this.printService.onDataReady();
    // debugger;
    this.loglistingService.setTestDataToPrint().subscribe(printedData => {
      this._dataForPrint = printedData;
      console.log("in the print document", this._dataForPrint);
    });
  }
}
