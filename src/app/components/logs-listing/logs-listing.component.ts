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
    "upcCode",
    "barCode",
    "actions"
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private loglistingService: LoglistingService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    try {
      this.loglistingService.getLogList().subscribe(data => {
        this.dataFromAPI = new MatTableDataSource(data);
        this.dataFromAPI.sort = this.sort;
        this.dataFromAPI.paginator = this.paginator;
        console.log("data", this.dataFromAPI);
      });
    } catch (e) {
      console.log("data", e);
    }
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
