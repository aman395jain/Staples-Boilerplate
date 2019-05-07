import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DashboardHeaderNameConverstionService {
  keyMap = {
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
    warranty: "WARRANTY",
    upcList: "UPC LIST",
    itemId: "ITEM ID"
  };
  printedDataNewHeader = {};

  constructor() {}

  headerNameConvert = dataForConvertion => {
    this.printedDataNewHeader = dataForConvertion.map(data => {
      return Object.keys(data).reduce((prev, next) => {
        if (next in this.keyMap) {
          prev[this.keyMap[next]] = data[next];
        } else {
          prev[next] = data[next];
        }
        return prev;
      }, {});
    });
    return this.printedDataNewHeader;
  };
}
