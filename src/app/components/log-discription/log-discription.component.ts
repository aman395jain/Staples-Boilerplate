import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DashboardHeaderNameConverstionService } from "src/app/services/dashboard-header-name-converstion.service";

@Component({
  selector: "app-log-discription",
  templateUrl: "./log-discription.component.html",
  styleUrls: ["./log-discription.component.scss"]
})
export class LogDiscriptionComponent implements OnInit {
  dataDiscriptionKeysToDisplay = [];
  dataDisplay = {};
  dataDisplayOnModal = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDiscription: any,
    private _dashboardHeaderNameConverstionService: DashboardHeaderNameConverstionService,
    private dialogRef: MatDialogRef<LogDiscriptionComponent>
  ) {}

  ngOnInit() {
    this.dataDiscriptionKeysToDisplay.push(this.dataDiscription);

    this.dataDisplay = this._dashboardHeaderNameConverstionService.headerNameConvert(
      this.dataDiscriptionKeysToDisplay
    );

    this.dataDisplayOnModal = this.dataDisplay[0];
  }
  closeDialog() {
    this.dialogRef.close(true);
  }
}
