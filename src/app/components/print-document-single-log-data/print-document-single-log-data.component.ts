import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";
import { DashboardHeaderNameConverstionService } from "src/app/services/dashboard-header-name-conversion/dashboard-header-name-converstion.service";

@Component({
  selector: "app-print-document-single-log-data",
  templateUrl: "./print-document-single-log-data.component.html",
  styleUrls: ["./print-document-single-log-data.component.scss"]
})
export class PrintDocumentSingleLogDataComponent implements OnInit, OnDestroy {
  private _onDestroy = new Subject<void>();
  dataPrintedDataForModal = [];
  dataBarCode = [];

  dataDisplay = {};
  constructor(
    private _printService: PrintDocumentService,
    private _logModalDataService: LogModalDataService,
    private _dashboardHeaderNameConverstionService: DashboardHeaderNameConverstionService
  ) {}

  ngOnInit() {
    this._printService.onDataReady();
    this._logModalDataService
      .setLogModalData()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(printData => {
        let testData = [];
        testData.push(printData);
        this.dataDisplay = this._dashboardHeaderNameConverstionService.headerNameConvert(
          testData
        );
        this.dataPrintedDataForModal = this.dataDisplay[0];
        this.dataBarCode = testData[0].upcList;
        console.log("in the print log data", testData[0].upcList);
      });
  }
  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
