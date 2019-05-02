import { Component, OnInit } from "@angular/core";
import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";

@Component({
  selector: "app-print-document-single-log-data",
  templateUrl: "./print-document-single-log-data.component.html",
  styleUrls: ["./print-document-single-log-data.component.scss"]
})
export class PrintDocumentSingleLogDataComponent implements OnInit {
  dataPrintedDataForModal = [];
  constructor(
    private _printService: PrintDocumentService,
    private _logModalDataService: LogModalDataService
  ) {}

  ngOnInit() {
    this._printService.onDataReady();
    this._logModalDataService.setLogModalData().subscribe(printData => {
      console.log("in the print log data", printData);
      this.dataPrintedDataForModal = printData;
    });
  }
}
