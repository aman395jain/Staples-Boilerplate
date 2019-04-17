import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-log-discription",
  templateUrl: "./log-discription.component.html",
  styleUrls: ["./log-discription.component.scss"]
})
export class LogDiscriptionComponent implements OnInit {
  dataDiscriptionKeysToDisplay = [];
  testArray1 = [];
  constructor(@Inject(MAT_DIALOG_DATA) public dataDiscription: any) {}

  ngOnInit() {
    this.dataDiscriptionKeysToDisplay.push(this.dataDiscription);
    let testData = this.dataDiscriptionKeysToDisplay.map(data => ({
      STORE: data.store,
      SKU: data.sku,
      "ITEM DESCRIPTION": data.itemDesc,
      "PERM PRICE": data.permPrice,
      "POSITION ID": data.posId,
      "BAR CODE": data.barCode,
      "SELL PRICE": data.sellPrice,
      PROFIT: data.profit,
      STATE: data.state
    }));

    this.testArray1.push(testData[0]);

    console.log("in the LogDiscriptionComponent", testData[0]);
  }
}
