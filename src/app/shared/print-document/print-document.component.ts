import { Component, OnInit } from "@angular/core";

import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { LoglistingService } from "src/app/services/log-listing/loglisting.service";

@Component({
  selector: "app-print-document",
  templateUrl: "./print-document.component.html",
  styleUrls: ["./print-document.component.scss"]
})
export class PrintDocumentComponent implements OnInit {
  constructor(private printService: PrintDocumentService) {}

  ngOnInit() {
    this.printService.onDataReady();
  }
}
