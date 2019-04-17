import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-log-discription",
  templateUrl: "./log-discription.component.html",
  styleUrls: ["./log-discription.component.scss"]
})
export class LogDiscriptionComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public dataDiscription: any) {}

  ngOnInit() {
    console.log("in the LogDiscriptionComponent", this.dataDiscription);
  }
}
