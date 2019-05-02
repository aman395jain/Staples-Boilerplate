import { Component, OnInit } from "@angular/core";
import { PrintDocumentService } from "src/app/services/print-document/print-document.service";

@Component({
  selector: "app-print-document-single-log-data",
  templateUrl: "./print-document-single-log-data.component.html",
  styleUrls: ["./print-document-single-log-data.component.scss"]
})
export class PrintDocumentSingleLogDataComponent implements OnInit {
  constructor(private printService: PrintDocumentService) {}

  ngOnInit() {
    this.printService.onDataReady();
  }
}
