import { Component, OnInit } from "@angular/core";
import "rxjs/add/observable/of";
import { MatTableDataSource } from "@angular/material";

import { LoglistingService } from "../../services/log-listing/loglisting.service";

@Component({
  selector: "app-logs-listing",
  templateUrl: "./logs-listing.component.html",
  styleUrls: ["./logs-listing.component.scss"]
})
export class LogsListingComponent implements OnInit {
  dataFromAPI: MatTableDataSource<any>;
  displayedColumns = ["name", "email", "phone", "company", "actions"];
  constructor(private loglistingService: LoglistingService) {}

  ngOnInit() {
    this.loglistingService.getLogList().subscribe(data => {
      this.dataFromAPI = new MatTableDataSource(data);
    });
  }
}
