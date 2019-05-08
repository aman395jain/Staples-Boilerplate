import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard-log-table",
  templateUrl: "./dashboard-log-table.component.html",
  styleUrls: ["./dashboard-log-table.component.scss"]
})
export class DisplayLogTableComponent implements OnInit {
  splitSize = "";
  constructor() {}

  ngOnInit() {
    this.splitSize = "12";
  }
}
