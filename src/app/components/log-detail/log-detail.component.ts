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
  private _onDestroy = new Subject<void>();

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

  pageNumberIndex: number;

  promoIdBuy: number;
  promoIdGet: number;

  linkedSKUsData: any;
  promosBuyData: any[];
  promosGetData: any[];
  itemGroupDataForID: any[];
  noDataFlagBuy: boolean = false;
  noDataFlagGet: boolean = false;

  tableHeader = "";
  rowData = {};

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
  ) {
    _logModalDataService
      .setLogDetailData()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(rowDataFromLaunch => {
        this.rowData = Object.create(rowDataFromLaunch);
      });
  }

  ngOnInit() {
    this._paginationForLongDataService
      .setPaginationIndexForBar()
      .subscribe(indexData => {
        this.pageNumberIndex = indexData.index;
      });

    this._location.subscribe(location => {
      if (
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
          this.rowData["table"]
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
          this.rowData["table"] === "Linked_SKUs" ||
          this.rowData["table"] === "ESP_Skus" ||
          this.rowData["table"] === "Recycle_Fee_SKUs" ||
          this.rowData["table"] === "Bag_Fee_SKUs"
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

        if (this.rowData["table"] === "Promos") {
          this._loglistingService
            .getDataForPromos(rowData.promoNum)
            .subscribe(data => {
              this._logModalDataService.getPrintDataForPromos(data);
              data.map(promoData => {
                if (
                  rowData.discountType &&
                  (rowData.discountType === "SMPL" ||
                    rowData.discountType === "CTHR" ||
                    rowData.discountType === "PQL_") &&
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
                    rowData.discountType === "BXGD")
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

        if (this.rowData["table"] === "Item_Group") {
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
    this._logModalDataService.getTableNameForLogDetail(this.rowData["table"]);
    this._printDocumentService.printDocument("logInvoice");
  }

  backToDataManagement() {
    this._navBarService.getAdvanceSearchStatus(false);
    const tableNameFromBack = {
      tableName: "",
      initialIndex: 1,
      spinnerFlag: true,
      spinnerForPagination: false
    };
    tableNameFromBack.tableName = this.rowData["table"];
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
