import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";
import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";
import { DashboardHeaderNameConverstionService } from "src/app/services/dashboard-header-name-conversion/dashboard-header-name-converstion.service";

@Component({
  selector: "staples-log-detail",
  templateUrl: "./log-detail.component.html",
  styleUrls: ["./log-detail.component.scss"]
})
export class LogDetailComponent implements OnInit {
  logDataForSingleEntity = [];
  logDataBarCode = [];

  logDataDisplay = {};

  constructor(
    private router: Router,
    private _logModalDataService: LogModalDataService,
    private _navBarService: NavBarService,
    private _dashboardHeaderNameConverstionService: DashboardHeaderNameConverstionService
  ) {}

  ngOnInit() {
    this._logModalDataService.setLogModalData().subscribe(rowData => {
      let logDetailForSingleEntity = [];
      logDetailForSingleEntity.push(rowData);
      this.logDataDisplay = this._dashboardHeaderNameConverstionService.headerNameConvert(
        logDetailForSingleEntity
      );
      this.logDataForSingleEntity = this.logDataDisplay[0];
      this.logDataBarCode = logDetailForSingleEntity[0].upcList;
      console.log("in the child component data", rowData);
    });
  }

  backToDataManagement() {
    this._logModalDataService.getLogDetailFlag(false);
    this._navBarService.getAdvanceSearchStatus(false);
    this._navBarService.setElementNameFromSideBar("Item_Master");
    this.router.navigate(["/testDataManagement"]);
  }
}
