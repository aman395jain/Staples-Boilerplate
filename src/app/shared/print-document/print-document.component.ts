import { Component, OnInit } from "@angular/core";

import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { ActivatedRoute } from "@angular/router";
import { LoglistingService } from "src/app/services/log-listing/loglisting.service";

@Component({
  selector: "app-print-document",
  templateUrl: "./print-document.component.html",
  styleUrls: ["./print-document.component.scss"]
})
export class PrintDocumentComponent implements OnInit {
  printedData: {};
  constructor(
    private printService: PrintDocumentService,
    private route: ActivatedRoute,
    private loglistingService: LoglistingService
  ) {}

  ngOnInit() {
    this.printService.onDataReady();
    // debugger;
    this.loglistingService.setTestDataToPrint().subscribe(data => {
      console.log("in the print document", data);
    });
    this.printedData = this.route.snapshot.params["printedData"].split(",");
  }
}
