import { Component, OnInit } from "@angular/core";
import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";

@Component({
  selector: "app-dashboard-log-table",
  templateUrl: "./dashboard-log-table.component.html",
  styleUrls: ["./dashboard-log-table.component.scss"]
})
export class DisplayLogTableComponent implements OnInit {
  splitLeftBarSize = "5";
  rightPartSplitSize = "95";
  minLeftBarSize = "5";
  maxLeftBarSize = "5";
  constructor(private _navBarService: NavBarService) {}

  ngOnInit() {
    this._navBarService.getToggleStatus().subscribe(toggleStatus => {
      if (toggleStatus) {
        this.splitLeftBarSize = "12";
        this.rightPartSplitSize = "88";
        this.minLeftBarSize = "12";
        this.maxLeftBarSize = "20";
      } else {
        this.splitLeftBarSize = "5";
        this.rightPartSplitSize = "95";
        this.minLeftBarSize = "5";
        this.maxLeftBarSize = "5";
      }
    });
  }
}
