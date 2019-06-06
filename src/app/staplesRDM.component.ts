import { Component } from "@angular/core";
import { PrintDocumentService } from "./services/print-document/print-document.service";

@Component({
  selector: "staples-root",
  templateUrl: "./StaplesRDM.component.html",
  styleUrls: ["./StaplesRDM.component.scss"]
})
export class AppComponent {
  title = "app";
  constructor(public printDocumentService: PrintDocumentService) {}
}
