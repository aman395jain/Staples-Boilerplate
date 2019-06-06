import { Component } from "@angular/core";
import { PrintDocumentService } from "./services/print-document/print-document.service";

@Component({
  selector: "staples-root",
  templateUrl: "./staplesRTDM.component.html",
  styleUrls: ["./staplesRTDM.component.scss"]
})
export class AppComponent {
  title = "app";
  constructor(public printDocumentService: PrintDocumentService) {}
}
