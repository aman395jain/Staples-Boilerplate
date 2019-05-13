import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

import { DashboardHeaderNameConverstionService } from "src/app/services/dashboard-header-name-conversion/dashboard-header-name-converstion.service";
import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { LogDiscriptionDataOrderService } from "src/app/helper/logDiscription/log-discription-data-order.service";

@Component({
  selector: "app-log-discription",
  templateUrl: "./log-discription.component.html",
  styleUrls: ["./log-discription.component.scss"]
})
export class LogDiscriptionComponent implements OnInit {
  dataDiscriptionKeysToDisplay = [];
  dataDiscriptionKeysToDisplay1 = [];
  mainDataDisplay = {};
  restDataDisplay = {};
  dataDisplayOnModal = [];
  dataDisplayOnModal1 = [];
  dataBarCode = [];
  dataDisplay = {};

  testData = [];

  tableName: string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDiscription: any,
    private _dashboardHeaderNameConverstionService: DashboardHeaderNameConverstionService,
    private dialogRef: MatDialogRef<LogDiscriptionComponent>,
    private _printDocumentService: PrintDocumentService,
    private _logDiscriptionDataOrderService: LogDiscriptionDataOrderService
  ) {}

  ngOnInit() {
    this.tableName = this._logDiscriptionDataOrderService.getTableName();
    console.log("in the component table name", this.tableName);

    if (this.tableName === "Item_Master") {
      this.testData = this._logDiscriptionDataOrderService.modalDataOrder(
        this.dataDiscription
      );

      this.dataDiscriptionKeysToDisplay.push(this.testData[0]);
      this.dataDiscriptionKeysToDisplay1.push(this.testData[1]);

      this.mainDataDisplay = this._dashboardHeaderNameConverstionService.headerNameConvert(
        this.dataDiscriptionKeysToDisplay
      );

      this.restDataDisplay = this._dashboardHeaderNameConverstionService.headerNameConvert(
        this.dataDiscriptionKeysToDisplay1
      );
      // console.log("this.mainDataDisplay", this.mainDataDisplay);

      this.dataDisplayOnModal = this.mainDataDisplay[0];
      this.dataDisplayOnModal1 = this.restDataDisplay[0];

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
    } else {
      this.dataDiscriptionKeysToDisplay.push(this.dataDiscription);
      // console.log(
      //   "this.dataDiscriptionKeysToDisplay",
      //   this.dataDiscriptionKeysToDisplay
      // );

      this.dataDisplay = this._dashboardHeaderNameConverstionService.headerNameConvert(
        this.dataDiscriptionKeysToDisplay
      );
      // console.log("this.dataDisplay", this.dataDisplay);

      this.dataDisplayOnModal = this.dataDisplay[0];
    }

    // console.log("in the modal", this.dataBarCode);
  }

  printDialogData(): void {
    this._printDocumentService.printDocument("logInvoice");
  }

  closeDialog(): void {
    this.dialogRef.close(true);
  }
}
