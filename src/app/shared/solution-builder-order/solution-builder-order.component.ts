import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";
import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";

@Component({
  selector: "app-solution-builder-order",
  templateUrl: "./solution-builder-order.component.html",
  styleUrls: ["./solution-builder-order.component.scss"]
})
export class SolutionBuilderOrderComponent implements OnInit {
  constructor(
    private router: Router,
    private _navBarService: NavBarService,
    private _logModalDataService: LogModalDataService
  ) {}

  ngOnInit() {}

  backToOrderDataTable() {
    this._logModalDataService.getKioskOrderFlag(false);
    this._navBarService.getAdvanceSearchStatus(false);
    const backToTable = {
      tableName: "Order",
      initialIndex: 1,
      spinnerFlag: true,
      spinnerForPagination: false
    };
    this._navBarService.setElementNameFromSideBar(backToTable);
    this.router.navigate(["/testDataManagement"]);
  }
}
