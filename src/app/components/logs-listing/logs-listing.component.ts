import { Component, OnInit, ViewChild } from "@angular/core";
import "rxjs/add/observable/of";
import { MatTableDataSource, MatSort } from "@angular/material";

import { LoglistingService } from "../../services/log-listing/loglisting.service";

@Component({
  selector: "app-logs-listing",
  templateUrl: "./logs-listing.component.html",
  styleUrls: ["./logs-listing.component.scss"]
})
export class LogsListingComponent implements OnInit {
  dataFromAPI: MatTableDataSource<any>;
  displayedColumns = ["name", "email", "phone", "company", "actions"];
  @ViewChild(MatSort) sort: MatSort;
  constructor(private loglistingService: LoglistingService) {}

  ngOnInit() {
    try {
      this.loglistingService.getLogList().subscribe(data => {
        this.dataFromAPI = new MatTableDataSource(data);
        this.dataFromAPI.sort = this.sort;
      });
    } catch (e) {
      console.log("data", e);
    }
  }
}
