import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Location } from "@angular/common";

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
  promosGetData: any;
  linkedSKUsDisplayStatusPrint: boolean = false;
  linkedSKUsDataPrint: any;

  constructor(
    private _printService: PrintDocumentService,
    private _logModalDataService: LogModalDataService,
    private _dashboardHeaderNameConverstionService: DashboardHeaderNameConverstionService,
    private _logDiscriptionDataOrderService: LogDescriptionDataOrderService,
    private _location: Location
  ) {}

  ngOnInit() {
    this._printService.onDataReady();

    this._location.subscribe(location => {
      console.log("dcsjkl", location);
    });
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
        let dataDescriptionKeysToDisplayForPrint = [];
        let mainAttributesForPrint = {};
        let restAttributesForPrint = {};

        this.classifiedDataLogDetailForPrint = this._logDiscriptionDataOrderService.modalDataOrder(
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
          // this.linkedSKUsData = this.classifiedDataLogDetail[2].linkedList;
          this.linkedSKUsDisplayStatusPrint = true;
        }

        if (this.tableNameForPrint === "Promos") {
          this._logModalDataService.setPrintDataForPromos().subscribe(data => {
            console.log("print promo data", data);
            data.map(promoData => {
              if (
                printData.discountType &&
                (printData.discountType === "SMPL" ||
                  printData.discountType === "CTHR") &&
                promoData.buyOrGetFlag &&
                promoData.buyOrGetFlag === "buy"
              ) {
                this.promoBuyDisplayStatus = true;
                this.promosBuyData = promoData;
              } else if (
                printData.discountType &&
                (printData.discountType === "SMPL" ||
                  printData.discountType === "CTHR" ||
                  printData.discountType === "BXGP" ||
                  printData.discountType === "GD") &&
                promoData.buyOrGetFlag &&
                promoData.buyOrGetFlag === "get"
              ) {
                this.promoGetDisplayStatus = true;
                this.promosGetData = promoData;
              }
            });
          });
        }

        // console.log("the print data is array:", printedDataForSingleEntity);
        // this.dataDisplay = this._dashboardHeaderNameConverstionService.headerNameConvert(
        //   printedDataForMainAttributes
        // );

        // this.dataPrintedDataForModal = this.dataDisplay[0];
        // this.dataBarCode = printedDataForMainAttributes[0].upcList;
        // console.log("in the print log data", printedDataForSingleEntity[0].upcList);
      });
  }
  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
