import { Component, OnInit } from "@angular/core";
import { LoglistingService } from "src/app/services/log-listing/loglisting.service";

@Component({
  selector: "app-print-document-layout",
  templateUrl: "./print-document-layout.component.html",
  styleUrls: ["./print-document-layout.component.scss"]
})
export class PrintDocumentLayoutComponent implements OnInit {
  constructor(private loglistingService: LoglistingService) {}

  ngOnInit() {
    this.loglistingService.setTestDataToPrint().subscribe(data => {
      console.log("in the print document", data);
    });
  }
}
