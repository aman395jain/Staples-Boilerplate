import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-side-nav-bar",
  templateUrl: "./side-nav-bar.component.html",
  styleUrls: ["./side-nav-bar.component.scss"]
})
export class SideNavBarComponent implements OnInit {
  opened = true;
  over = "side";
  expandHeight = "42px";
  collapseHeight = "42px";
  displayMode = "flat";

  watcher: Subscription;

  constructor() {
    this.opened = true;
    this.over = "side";
    // this.watcher = media.media$.subscribe((change: MediaChange) => {
    //   if (change.mqAlias === "sm" || change.mqAlias === "xs") {
    //     this.opened = false;
    //     this.over = "over";
    //   } else {
    //     this.opened = true;
    //     this.over = "side";
    //   }
    // });
  }

  ngOnInit() {}
}
