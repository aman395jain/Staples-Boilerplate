import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";
import { DashboardHeaderNameConverstionService } from "src/app/services/dashboard-header-name-conversion/dashboard-header-name-converstion.service";

/**
 * @class PrintDocumentSingleLogDataComponent
 * Printing the data for a single entity from Log description Modal.
 */
@Component({
  selector: "staples-print-document-single-log-data",
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
        let printedDataForSingleEntity = [];
        printedDataForSingleEntity.push(printData);
        this.dataDisplay = this._dashboardHeaderNameConverstionService.headerNameConvert(
          printedDataForSingleEntity
        );
        this.dataPrintedDataForModal = this.dataDisplay[0];
        this.dataBarCode = printedDataForSingleEntity[0].upcList;
        // console.log("in the print log data", printedDataForSingleEntity[0].upcList);
      });
  }
  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
