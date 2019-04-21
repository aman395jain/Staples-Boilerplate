import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

/**
 * @ngdoc service
 * @name PrintDocumentService
 *
 * @description
 * Service for print the data table.
 **/
@Injectable()
export class PrintDocumentService {
  isPrinting = false;
  constructor(private router: Router) {}

  printDocument(documentName: string, documentData: any) {
    this.isPrinting = true;
    this.router.navigate([
      "/",
      {
        outlets: {
          print: ["print", documentName, documentData.join()]
        }
      }
    ]);
  }

  onDataReady() {
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
      this.router.navigate([{ outlets: { print: null } }]);
    });
  }
}
