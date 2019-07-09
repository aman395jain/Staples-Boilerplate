import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Location } from "@angular/common";

import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";
import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";
import { DashboardHeaderNameConverstionService } from "src/app/services/dashboard-header-name-conversion/dashboard-header-name-converstion.service";
import { LogDescriptionDataOrderService } from "src/app/helper/logDescription/log-description-data-order.service";
import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { LoglistingService } from "src/app/services/log-listing/loglisting.service";
import { PaginationForLongDataService } from "src/app/services/pagination-for-longData/pagination-for-long-data.service";

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

  linkedSKUsDisplayStatus: boolean = false;
  promoBuyDisplayStatus: boolean = false;
  promoBuyDisplayStatusForBXGP: boolean = false;
  promoGetDisplayStatus: boolean = false;
  itemGroupDataDisplayStatus: boolean = false;
  promosGroupStatus: boolean = false;
  displaySKUListStatus: boolean = false;
  displaySKUBuyFlag: string = "";
  displaySKUGetFlag: string = "";

  tableNameLogDetails = "";
  pageNumberIndex: number;

  promoIdBuy: number;
  promoIdGet: number;

  private _onDestroy = new Subject<void>();
  linkedSKUsData: any;
  promosBuyData: any[];
  promosGetData: any[];
  itemGroupDataForID: any[];
  noDataFlagBuy: boolean = false;
  noDataFlagGet: boolean = false;

  tableHeader = "";

  constructor(
    private router: Router,
    private _logModalDataService: LogModalDataService,
    private _navBarService: NavBarService,
    private _printDocumentService: PrintDocumentService,
    private _dashboardHeaderNameConverstionService: DashboardHeaderNameConverstionService,
    private _logDiscriptionDataOrderService: LogDescriptionDataOrderService,
    private _loglistingService: LoglistingService,
    private _paginationForLongDataService: PaginationForLongDataService,
    private _location: Location
  ) {}

  ngOnInit() {
    this._logModalDataService
      .setTableNameForLogDetail()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(tableName => {
        this.tableNameLogDetails = tableName;
      });

    this._paginationForLongDataService
      .setPaginationIndexForBar()
      .subscribe(indexData => {
        this.pageNumberIndex = indexData.index;
      });

    this._location.subscribe(location => {
      if (location.pop && location.url === "/testDataManagement") {
        this._logModalDataService.getLogDetailFlag(false);
        this._navBarService.getAdvanceSearchStatus(false);
        const tableNameFromBack = {
          tableName: "",
          initialIndex: 1,
          spinnerFlag: true,
          spinnerForPagination: false
        };
        tableNameFromBack.tableName = this.tableNameLogDetails;
        tableNameFromBack.initialIndex = this.pageNumberIndex;
        this._navBarService.setElementNameFromSideBar(tableNameFromBack);
      } else if (
        location.pop &&
        location.url === "/testDataManagement/logDetail(print:print/logInvoice)"
      ) {
        this._printDocumentService.printDocument("logInvoice");
      }
    });

    this._logModalDataService
      .setLogDetailData()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(rowDataFromLaunch => {
        let rowData = rowDataFromLaunch.row;
        this.tableHeader = rowDataFromLaunch.tableName;

        this.classifiedDataLogDetail = this._logDiscriptionDataOrderService.dataOrderClassification(
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

        if (
          this.tableNameLogDetails === "Linked_SKUs" ||
          this.tableNameLogDetails === "ESP_Skus" ||
          this.tableNameLogDetails === "Recycle_Fee_SKUs" ||
          this.tableNameLogDetails === "Bag_Fee_SKUs"
        ) {
          this._logModalDataService.setLinkedSKUsData().subscribe(data => {
            this.linkedSKUsData = data;
          });
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

        if (this.tableNameLogDetails === "Promos") {
          this._loglistingService
            .getDataForPromos(rowData.promoNum)
            .subscribe(data => {
              this._logModalDataService.getPrintDataForPromos(data);
              data.map(promoData => {
                if (
                  rowData.discountType &&
                  (rowData.discountType === "SMPL" ||
                    rowData.discountType === "CTHR" ||
                    rowData.discountType === "PQL") &&
                  promoData.buyOrGetFlag &&
                  promoData.buyOrGetFlag === "buy"
                ) {
                  this.promoBuyDisplayStatus = true;
                  this.promosBuyData = promoData;
                  if (promoData.promoGroup && promoData.promoGroup === "0") {
                    this.promosGroupStatus = true;
                  } else {
                    this.promosGroupStatus = false;
                  }
                } else if (
                  rowData.discountType &&
                  (rowData.discountType === "BXGP" ||
                    rowData.discountType === "BXGD" ||
                    rowData.discountType === "PQLT")
                ) {
                  if (
                    promoData.buyOrGetFlag &&
                    promoData.buyOrGetFlag === "buy"
                  ) {
                    this.promoBuyDisplayStatusForBXGP = true;
                    this.promosBuyData = promoData;
                    this.promoIdBuy = promoData.promoGroup;
                  }
                  if (
                    promoData.buyOrGetFlag &&
                    promoData.buyOrGetFlag === "get"
                  ) {
                    this.promoGetDisplayStatus = true;
                    this.promosGetData = promoData;
                    this.promoIdGet = promoData.promoGroup;
                  }
                }
              });
            });
        }

        if (this.tableNameLogDetails === "Item_Group") {
          this._loglistingService
            .getItemGroupData(rowData.itemGroupId)
            .subscribe(data => {
              this._logModalDataService.getPrintDataForItemGroup(data);
              this.itemGroupDataDisplayStatus = true;
              this.itemGroupDataForID = data;
            });
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
    const tableNameFromBack = {
      tableName: "",
      initialIndex: 1,
      spinnerFlag: true,
      spinnerForPagination: false
    };
    tableNameFromBack.tableName = this.tableNameLogDetails;
    tableNameFromBack.initialIndex = this.pageNumberIndex;
    this._navBarService.setElementNameFromSideBar(tableNameFromBack);
    this.router.navigate(["/testDataManagement"]);
  }

  displaySkuListBuy() {
    this.displaySKUListStatus = true;
    this.displaySKUBuyFlag = "buy";
    this._loglistingService
      .getItemGroupData(this.promoIdBuy)
      .subscribe(promoSKUList => {
        if (promoSKUList.length === 0) {
          this.noDataFlagBuy = true;
        } else {
          this.noDataFlagBuy = false;
        }
      });
  }

  displaySkuListGet() {
    this.displaySKUListStatus = true;
    this.displaySKUGetFlag = "get";
    this._loglistingService
      .getItemGroupData(this.promoIdGet)
      .subscribe(promoSKUList => {
        if (promoSKUList.length === 0) {
          this.noDataFlagGet = true;
        } else {
          this.noDataFlagGet = false;
        }
      });
  }
}
