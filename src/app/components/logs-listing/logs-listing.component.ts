import { Component, OnInit, ViewChild } from "@angular/core";
import "rxjs/add/observable/of";
import {
  MatTableDataSource,
  MatSort,
  MatPaginator,
  MatDialogConfig,
  MatDialog
} from "@angular/material";

import { LoglistingService } from "../../services/log-listing/loglisting.service";
import { LogDiscriptionComponent } from "../log-discription/log-discription.component";
import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";

@Component({
  selector: "app-logs-listing",
  templateUrl: "./logs-listing.component.html",
  styleUrls: ["./logs-listing.component.scss"]
})
export class LogsListingComponent implements OnInit {
  dataFromAPI: MatTableDataSource<any>;
  displayedColumns = [
    "sku",
    "itemDesc",
    "permPrice",
    "posId",
    "barCode",
    "actions"
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private loglistingService: LoglistingService,
    private dialog: MatDialog,
    private navBarService: NavBarService
  ) {}

  ngOnInit() {
    try {
      this.loglistingService.getLogList().subscribe(data => {
        this.dataFromAPI = new MatTableDataSource(data);
        this.dataFromAPI.sort = this.sort;
        this.dataFromAPI.paginator = this.paginator;
      });
    } catch (e) {
      console.log("data", e);
    }
    this.navBarService.getElementName().subscribe(tableName => {
      this.loglistingService.getLogListForEntity(tableName).subscribe(data => {
        this.dataFromAPI = new MatTableDataSource(data);
        this.dataFromAPI.sort = this.sort;
        this.dataFromAPI.paginator = this.paginator;
      });
    });
  }

  /*
  * applyFilter to apply search on table
  * filterValue: accept string
  */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataFromAPI.filter = filterValue;
  }

  /*
  * discriptionLog to populate the data in a Modal
  */
  discriptionLog(row) {
    console.log("in the row", row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(LogDiscriptionComponent, dialogConfig);
  }
}
