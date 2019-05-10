import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

import { DashboardHeaderNameConverstionService } from "src/app/services/dashboard-header-name-conversion/dashboard-header-name-converstion.service";
import { PrintDocumentService } from "src/app/services/print-document/print-document.service";

@Component({
  selector: "app-log-discription",
  templateUrl: "./log-discription.component.html",
  styleUrls: ["./log-discription.component.scss"]
})
export class LogDiscriptionComponent implements OnInit {
  dataDiscriptionKeysToDisplay = [];
  dataDisplay = {};
  dataDisplayOnModal = [];
  dataBarCode = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDiscription: any,
    private _dashboardHeaderNameConverstionService: DashboardHeaderNameConverstionService,
    private dialogRef: MatDialogRef<LogDiscriptionComponent>,
    private _printDocumentService: PrintDocumentService
  ) {}

  ngOnInit() {
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
    // console.log("this.dataDisplayOnModal", this.dataDisplayOnModal);

    for (
      let i = 0;
      i < this.dataDiscriptionKeysToDisplay[0].upcList.length;
      i++
    ) {
      this.dataBarCode.push(this.dataDiscriptionKeysToDisplay[0].upcList[i]);
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
