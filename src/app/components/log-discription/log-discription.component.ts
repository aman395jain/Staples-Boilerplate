import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-log-discription",
  templateUrl: "./log-discription.component.html",
  styleUrls: ["./log-discription.component.scss"]
})
export class LogDiscriptionComponent implements OnInit {
  dataDiscriptionKeysToDisplay = [];
  dataDisplayOnModal = [];
  keyMap = {};
  constructor(@Inject(MAT_DIALOG_DATA) public dataDiscription: any) {}

  ngOnInit() {
    this.dataDiscriptionKeysToDisplay.push(this.dataDiscription);

    // this.dataDisplayOnModal = this.dataDiscriptionKeysToDisplay.map(data => ({
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

    // this.dataDisplayOnModal.map(data => {
    //   console.log("in the map", Object.keys(data));
    // });

    // console.log("in the log component", this.dataDiscription);

    this.keyMap = {
      barCode: "Bar Code",
      itemDesc: "Item Description",
      permPrice: "Prem Price",
      posId: "POSITION ID",
      profit: "PROFIT",
      sellPrice: "SELL PRICE",
      sku: "SKU",
      state: "STATE",
      store: "STORE"
    };

    this.dataDisplayOnModal = this.dataDiscriptionKeysToDisplay.map(data => {
      return Object.keys(data).reduce((prev, next) => {
        if (next in this.keyMap) {
          prev[this.keyMap[next]] = data[next];
        } else {
          prev[next] = data[next];
        }
        return prev;
      }, {});
    });

    console.log("in the log component", this.dataDisplayOnModal);
  }
}
