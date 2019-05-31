import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { LoglistingService } from "src/app/services/log-listing/loglisting.service";
import { DashboardHeaderNameConverstionService } from "src/app/services/dashboard-header-name-conversion/dashboard-header-name-converstion.service";

@Component({
  selector: "staples-print-document",
  templateUrl: "./print-document.component.html",
  styleUrls: ["./print-document.component.scss"]
})
export class PrintDocumentComponent implements OnInit, OnDestroy {
  private _onDestroy = new Subject<void>();

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
    this._loglistingService
      .setTestDataToPrint()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(printedData => {
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

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
