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
  constructor(private _navBarService: NavBarService) {}

  ngOnInit() {
    this._navBarService.getToggleStatus().subscribe(toggleStatus => {
      console.log("in the dashboard", toggleStatus);
      if (toggleStatus) {
        this.splitLeftBarSize = "12";
        this.rightPartSplitSize = "88";
      } else {
        this.splitLeftBarSize = "5";
        this.rightPartSplitSize = "95";
      }
    });
  }
}
