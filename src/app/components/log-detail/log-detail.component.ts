import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";
import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";
import { DashboardHeaderNameConverstionService } from "src/app/services/dashboard-header-name-conversion/dashboard-header-name-converstion.service";
import { LogDescriptionDataOrderService } from "src/app/helper/logDescription/log-description-data-order.service";
import { PrintDocumentService } from "src/app/services/print-document/print-document.service";

@Component({
  selector: "staples-log-detail",
  templateUrl: "./log-detail.component.html",
  styleUrls: ["./log-detail.component.scss"]
})
export class LogDetailComponent implements OnInit, OnDestroy {
  logDataForSingleEntity = [];
  logDataBarCode = [];

  logDataDisplay = {};
  classifiedDataLogDetail: any[];
  dataDiscriptionKeysToDisplay: any = [];
  restDataDiscriptionKeysToDisplay: any = [];
  mainDataDisplay: {};
  restDataDisplay: {};
  dataDisplayOnModal: any = [];
  dataDisplayOnModalRest: any = [];
  dataBarCode: any = [];

  linkedSKUsDisplayStatus = false;

  tableNameLogDetails = "";

  private _onDestroy = new Subject<void>();
  linkedSKUsData: any;

  constructor(
    private router: Router,
    private _logModalDataService: LogModalDataService,
    private _navBarService: NavBarService,
    private _printDocumentService: PrintDocumentService,
    private _dashboardHeaderNameConverstionService: DashboardHeaderNameConverstionService,
    private _logDiscriptionDataOrderService: LogDescriptionDataOrderService
  ) {}

  ngOnInit() {
    this._logModalDataService
      .setTableNameForLogDetail()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(tableName => {
        this.tableNameLogDetails = tableName;
      });

    this._logModalDataService
      .setLogDetailData()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(rowData => {
        let logDetailForSingleEntity = [];
        // console.log("row data in log detailcomponent", rowData);
        logDetailForSingleEntity.push(rowData);

        this.classifiedDataLogDetail = this._logDiscriptionDataOrderService.modalDataOrder(
          rowData,
          this.tableNameLogDetails
        );
        this.dataDiscriptionKeysToDisplay.push(this.classifiedDataLogDetail[0]);
        this.restDataDiscriptionKeysToDisplay.push(
          this.classifiedDataLogDetail[1]
        );
        this.mainDataDisplay = this._dashboardHeaderNameConverstionService.headerNameConvert(
          this.dataDiscriptionKeysToDisplay
        );

        this.restDataDisplay = this._dashboardHeaderNameConverstionService.headerNameConvert(
          this.restDataDiscriptionKeysToDisplay
        );

        if (this.tableNameLogDetails === "Linked_SKUs") {
          this.linkedSKUsData = this.classifiedDataLogDetail[2].linkedList;
          this.linkedSKUsDisplayStatus = true;
        }

        this.dataDisplayOnModal = this.mainDataDisplay[0];
        this.dataDisplayOnModalRest = this.restDataDisplay[0];

        if (this.dataDiscriptionKeysToDisplay[0].upcList) {
          for (
            let i = 0;
            i < this.dataDiscriptionKeysToDisplay[0].upcList.length;
            i++
          ) {
            this.dataBarCode.push(
              this.dataDiscriptionKeysToDisplay[0].upcList[i]
            );
          }
        } else {
          this.dataBarCode.push(this.dataDiscriptionKeysToDisplay[0].barCode);
        }
      });
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  printSingleEntityData(): void {
    this._printDocumentService.printDocument("logInvoice");
  }

  backToDataManagement() {
    this._logModalDataService.getLogDetailFlag(false);
    this._navBarService.getAdvanceSearchStatus(false);
    this._navBarService.setElementNameFromSideBar(this.tableNameLogDetails);
    this.router.navigate(["/testDataManagement"]);
  }
}
