import {
  Component,
  OnInit,
  Inject,
  ChangeDetectionStrategy
} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

import { DashboardHeaderNameConverstionService } from "src/app/services/dashboard-header-name-conversion/dashboard-header-name-converstion.service";
import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { LogDiscriptionDataOrderService } from "src/app/helper/logDiscription/log-discription-data-order.service";

@Component({
  selector: "app-log-discription",
  templateUrl: "./log-discription.component.html",
  styleUrls: ["./log-discription.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogDiscriptionComponent implements OnInit {
  dataDiscriptionKeysToDisplay = [];
  restDataDiscriptionKeysToDisplay = [];
  mainDataDisplay = {};
  restDataDisplay = {};
  dataDisplayOnModal = [];
  dataDisplayOnModalRest = [];
  dataBarCode = [];
  dataDisplay = {};

  classifiedData = [];

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

    if (
      this.tableName === "Tax_Rates" ||
      this.tableName === "Employee" ||
      this.tableName === "Item_Master" ||
      this.tableName === "Price_Prompt_SKUs" ||
      this.tableName === "Hardware_SKUs" ||
      this.tableName === "Linked_SKUs" ||
      this.tableName === "Free_SKUs" ||
      this.tableName === "Age_Restricted_Special_rest" ||
      this.tableName === "Promos"
    ) {
      console.log("in the component table name", this.tableName);
      //If condition is Just for test
      this.classifiedData = this._logDiscriptionDataOrderService.modalDataOrder(
        this.dataDiscription
      );

      this.dataDiscriptionKeysToDisplay.push(this.classifiedData[0]);
      this.restDataDiscriptionKeysToDisplay.push(this.classifiedData[1]);

      this.mainDataDisplay = this._dashboardHeaderNameConverstionService.headerNameConvert(
        this.dataDiscriptionKeysToDisplay
      );

      this.restDataDisplay = this._dashboardHeaderNameConverstionService.headerNameConvert(
        this.restDataDiscriptionKeysToDisplay
      );
      // console.log("this.mainDataDisplay", this.mainDataDisplay);

      this.dataDisplayOnModal = this.mainDataDisplay[0];
      this.dataDisplayOnModalRest = this.restDataDisplay[0];
      console.log("test data in dialog", this.dataDisplayOnModal);

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

      this.dataDisplay = this._dashboardHeaderNameConverstionService.headerNameConvert(
        this.dataDiscriptionKeysToDisplay
      );

      this.dataDisplayOnModal = this.dataDisplay[0];
    }
  }

  printDialogData(): void {
    this._printDocumentService.printDocument("logInvoice");
  }

  closeDialog(): void {
    this.dialogRef.close(true);
  }
}
