import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";
import { DashboardHeaderNameConverstionService } from "src/app/services/dashboard-header-name-conversion/dashboard-header-name-converstion.service";
import { LogDescriptionDataOrderService } from "src/app/helper/logDescription/log-description-data-order.service";

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
  tableNameForPrint = "";
  classifiedDataLogDetailForPrint: any[];
  printForMainAttributes = [];
  printForRestAttributes = [];
  promoBuyDisplayStatus: boolean = false;
  promosBuyData: any;
  promoGetDisplayStatus: boolean = false;
  promoBuyDisplayStatusForBXGP: boolean = false;
  promosGetData: any;
  linkedSKUsDisplayStatusPrint: boolean = false;
  linkedSKUsDataPrint: any;
  itemGroupDataDisplayStatusPrint: boolean = false;
  itemGroupDataForIDPrint: any[];

  orderListDataPrintStatus: boolean = false;
  orderListDataPrint: any;

  constructor(
    private _printService: PrintDocumentService,
    private _logModalDataService: LogModalDataService,
    private _dashboardHeaderNameConverstionService: DashboardHeaderNameConverstionService,
    private _logDiscriptionDataOrderService: LogDescriptionDataOrderService
  ) {}

  ngOnInit() {
    this._printService.onDataReady();

    this._logModalDataService
      .setTableNameForLogDetail()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(tableName => {
        this.tableNameForPrint = tableName;
      });

    this._logModalDataService
      .setLogModalData()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(printData => {
        // console.log("the print data is:", printData);
        let printedDataForMainAttributes = [];
        let printedDataForRestAttributes = [];
        let mainAttributesForPrint = {};
        let restAttributesForPrint = {};

        this.classifiedDataLogDetailForPrint = this._logDiscriptionDataOrderService.dataOrderClassification(
          printData,
          this.tableNameForPrint
        );

        printedDataForMainAttributes.push(
          this.classifiedDataLogDetailForPrint[0]
        );
        printedDataForRestAttributes.push(
          this.classifiedDataLogDetailForPrint[1]
        );

        mainAttributesForPrint = this._dashboardHeaderNameConverstionService.headerNameConvert(
          printedDataForMainAttributes
        );

        restAttributesForPrint = this._dashboardHeaderNameConverstionService.headerNameConvert(
          printedDataForRestAttributes
        );
        this.printForMainAttributes = mainAttributesForPrint[0];
        this.printForRestAttributes = restAttributesForPrint[0];

        if (printedDataForMainAttributes[0].upcList) {
          for (
            let i = 0;
            i < printedDataForMainAttributes[0].upcList.length;
            i++
          ) {
            this.dataBarCode.push(printedDataForMainAttributes[0].upcList[i]);
          }
        } else {
          this.dataBarCode.push(printedDataForMainAttributes[0].barCode);
        }

        if (
          this.tableNameForPrint === "Linked_SKUs" ||
          this.tableNameForPrint === "ESP_Skus" ||
          this.tableNameForPrint === "Recycle_Fee_SKUs" ||
          this.tableNameForPrint === "Bag_Fee_SKUs"
        ) {
          this._logModalDataService.setLinkedSKUsData().subscribe(data => {
            this.linkedSKUsDataPrint = data;
          });
          this.linkedSKUsDisplayStatusPrint = true;
        }

        // order data
        if (this.tableNameForPrint === "Order") {
          this._logModalDataService.setOrderListData().subscribe(data => {
            console.log("in print order list data", data);
            this.orderListDataPrint = data;
          });
          this.orderListDataPrintStatus = true;
        }

        // promo data
        if (this.tableNameForPrint === "Promos") {
          this._logModalDataService.setPrintDataForPromos().subscribe(data => {
            console.log("print promo data", data);
            data.map(promoData => {
              if (
                printData.discountType &&
                (printData.discountType === "SMPL" ||
                  printData.discountType === "CTHR" ||
                  printData.discountType === "PQL_") &&
                promoData.buyOrGetFlag &&
                promoData.buyOrGetFlag === "buy"
              ) {
                this.promoBuyDisplayStatus = true;
                this.promosBuyData = promoData;
              } else if (
                printData.discountType &&
                (printData.discountType === "BXGP" ||
                  printData.discountType === "BXGD")
              ) {
                if (
                  promoData.buyOrGetFlag &&
                  promoData.buyOrGetFlag === "buy"
                ) {
                  this.promoBuyDisplayStatusForBXGP = true;
                  this.promosBuyData = promoData;
                }
                if (
                  promoData.buyOrGetFlag &&
                  promoData.buyOrGetFlag === "get"
                ) {
                  this.promoGetDisplayStatus = true;
                  this.promosGetData = promoData;
                }
              }
            });
          });
        }

        if (this.tableNameForPrint === "Item_Group") {
          this._logModalDataService
            .setPrintDataForItemGroup()
            .subscribe(data => {
              this.itemGroupDataDisplayStatusPrint = true;
              this.itemGroupDataForIDPrint = data;
            });
        }
      });
  }
  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
