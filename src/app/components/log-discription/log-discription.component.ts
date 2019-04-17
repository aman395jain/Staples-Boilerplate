import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-log-discription",
  templateUrl: "./log-discription.component.html",
  styleUrls: ["./log-discription.component.scss"]
})
export class LogDiscriptionComponent implements OnInit {
  dataDiscriptionKeys = [];
  dataDiscriptionKeysToDisplay = [];

  constructor(@Inject(MAT_DIALOG_DATA) public dataDiscription: any) {}

  ngOnInit() {
    this.dataDiscriptionKeys = Object.keys(this.dataDiscription);
    this.dataDiscriptionKeys.map(ele => {
      if (ele === "store") {
        this.dataDiscriptionKeysToDisplay.push({
          STORE: this.dataDiscription.store
        });
      }
      if (ele === "sku") {
        this.dataDiscriptionKeysToDisplay.push({
          SKU: this.dataDiscription.sku
        });
      }
      if (ele === "itemDesc") {
        this.dataDiscriptionKeysToDisplay.push({
          "ITEM DESCRIPTION": this.dataDiscription.itemDesc
        });
      }
      if (ele === "permPrice") {
        this.dataDiscriptionKeysToDisplay.push({
          "PERM PRICE": this.dataDiscription.permPrice
        });
      }
      if (ele === "posId") {
        this.dataDiscriptionKeysToDisplay.push({
          "POSITION ID": this.dataDiscription.posId
        });
      }
      if (ele === "barCode") {
        this.dataDiscriptionKeysToDisplay.push({
          "BAR CODE": this.dataDiscription.barCode
        });
      }
      if (ele === "sellPrice") {
        this.dataDiscriptionKeysToDisplay.push({
          "SELL PRICE": this.dataDiscription.sellPrice
        });
      }
      if (ele === "profit") {
        this.dataDiscriptionKeysToDisplay.push({
          PROFIT: this.dataDiscription.profit
        });
      }
      if (ele === "state") {
        this.dataDiscriptionKeysToDisplay.push({
          STATE: this.dataDiscription.state
        });
      }
    });

    console.log(
      "in the LogDiscriptionComponent",
      this.dataDiscriptionKeysToDisplay
    );
  }
}
