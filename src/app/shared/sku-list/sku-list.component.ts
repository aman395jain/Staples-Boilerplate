import { Component, OnInit } from "@angular/core";
import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";

@Component({
  selector: "staples-sku-list",
  templateUrl: "./sku-list.component.html",
  styleUrls: ["./sku-list.component.scss"]
})
export class SkuListComponent implements OnInit {
  constructor(private _logModalDataService: LogModalDataService) {}

  ngOnInit() {
    this._logModalDataService.setSkuDataForItemGroup().subscribe(data => {});
  }
}
