import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-log-discription",
  templateUrl: "./log-discription.component.html",
  styleUrls: ["./log-discription.component.scss"]
})
export class LogDiscriptionComponent implements OnInit {
  dataDiscriptionKeysToDisplay = [];
  dataDisplay = [];
  keyMap = {};
  dataDisplayOnModal = [];

  constructor(@Inject(MAT_DIALOG_DATA) public dataDiscription: any) {}

  ngOnInit() {
    this.dataDiscriptionKeysToDisplay.push(this.dataDiscription);

    // this.dataDisplay = this.dataDiscriptionKeysToDisplay.map(data => ({
    //   STORE: data.store,
    //   SKU: data.sku,
    //   "ITEM DESCRIPTION": data.itemDesc,
    //   "PERM PRICE": data.permPrice,
    //   "POSITION ID": data.posId,
    //   "BAR CODE": data.barCode,
    //   "SELL PRICE": data.sellPrice,
    //   PROFIT: data.profit,
    //   STATE: data.state
    // }));

    // this.dataDisplay.map(data => {
    //   console.log("in the map", Object.keys(data));
    // });

    // console.log("in the log component", this.dataDiscription);

    this.keyMap = {
      barCode: "BAR CODE",
      itemDesc: "ITEM DESCRIPION",
      permPrice: "PREM PRICE",
      posId: "POSITION ID",
      profit: "PROFIT",
      sellPrice: "SELL PRICE",
      sku: "SKU",
      state: "STATE",
      store: "STORE",
      empName: "EMPLOYEE NAME",
      empPass: "PASSWORD",
      empRole: "EMPLOYEE ROLE",
      taxRate: "TAX RATE",
      taxState: "TAX STATE",
      freeSku: "FREE SKUs",
      freeSkuPrice: "FREE SKU PRICE",
      itemGroupID: "ITEM GROUP ID",
      warranty: "WARRANTY"
    };

    this.dataDisplay = this.dataDiscriptionKeysToDisplay.map(data => {
      return Object.keys(data).reduce((prev, next) => {
        if (next in this.keyMap) {
          prev[this.keyMap[next]] = data[next];
        } else {
          prev[next] = data[next];
        }
        return prev;
      }, {});
    });

    this.dataDisplayOnModal = this.dataDisplay[0];
  }
}
