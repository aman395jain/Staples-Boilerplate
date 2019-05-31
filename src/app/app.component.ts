import { Component } from "@angular/core";
import { PrintDocumentService } from "./services/print-document/print-document.service";

@Component({
  selector: "staples-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";
  constructor(public printDocumentService: PrintDocumentService) {}
}
