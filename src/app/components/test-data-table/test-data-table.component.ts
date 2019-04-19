import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatTableDataSource,
  MatSort,
  MatDialogConfig,
  MatDialog
} from "@angular/material";
import "rxjs/add/observable/of";

import { LogDiscriptionComponent } from "../log-discription/log-discription.component";
import { LoglistingService } from "src/app/services/log-listing/loglisting.service";
import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";
import { PrintDocumentService } from "src/app/services/print-document/print-document.service";

@Component({
  selector: "app-test-data-table",
  templateUrl: "./test-data-table.component.html",
  styleUrls: ["./test-data-table.component.scss"]
})
export class TestDataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columns = [];

  displayedColumns = {};
  dataByAPI: MatTableDataSource<any>;
  constructor(
    private _loglistingService: LoglistingService,
    private _dialog: MatDialog,
    private _navBarService: NavBarService,
    private _printDocumentService: PrintDocumentService
  ) {}

  ngOnInit() {
    this.columns = [
      {
        columnDef: "sku",
        header: "SKU",
        cell: (element: any) => `${element.sku}`
      },
      {
        columnDef: "itemDesc",
        header: "ITEM DESCRIPTION",
        cell: (element: any) => `${element.itemDesc}`
      },
      {
        columnDef: "permPrice",
        header: "PERM PRICE",
        cell: (element: any) => `${element.permPrice}`
      },
      {
        columnDef: "posId",
        header: "POSITION ID",
        cell: (element: any) => `${element.posId}`
      },
      {
        columnDef: "barCode",
        header: "BAR CODE",
        cell: (element: any) => `${element.posId}`
      },
      {
        columnDef: "action",
        header: "",
        cell: (element: any) => null
      }
    ];

    this.displayedColumns = this.columns.map(c => c.columnDef);

    try {
      this._loglistingService.getLogList().subscribe(data => {
        console.log("in the log component");
        this.dataByAPI = new MatTableDataSource(data);
        this.dataByAPI.sort = this.sort;
        this.dataByAPI.paginator = this.paginator;
      });
    } catch (e) {
      console.log("in the test error", e);
    }
    this._navBarService.getElementName().subscribe(tableName => {
      if (tableName === "Price Prompt SKUs") {
        this.columns = [
          {
            columnDef: "sku",
            header: "SKU",
            cell: (element: any) => `${element.sku}`
          },
          {
            columnDef: "itemDesc",
            header: "ITEM DESCRIPTION",
            cell: (element: any) => `${element.itemDesc}`
          },
          {
            columnDef: "permPrice",
            header: "PERM PRICE",
            cell: (element: any) => `${element.permPrice}`
          },
          {
            columnDef: "posId",
            header: "POSITION ID",
            cell: (element: any) => `${element.posId}`
          },
          {
            columnDef: "barCode",
            header: "BAR CODE",
            cell: (element: any) => `${element.posId}`
          },
          {
            columnDef: "action",
            header: "",
            cell: (element: any) => null
          }
        ];

        this.displayedColumns = this.columns.map(c => c.columnDef);
      } else if (tableName === "Hardware SKUs") {
        console.log("in the test data table", tableName);
        this.columns = [
          {
            columnDef: "sku",
            header: "SKU",
            cell: (element: any) => `${element.sku}`
          },
          {
            columnDef: "itemDesc",
            header: "ITEM DESCRIPTION",
            cell: (element: any) => `${element.itemDesc}`
          },
          {
            columnDef: "permPrice",
            header: "PERM PRICE",
            cell: (element: any) => `${element.permPrice}`
          },
          {
            columnDef: "barCode",
            header: "BAR CODE",
            cell: (element: any) => `${element.posId}`
          },
          {
            columnDef: "action",
            header: "",
            cell: (element: any) => null
          }
        ];

        this.displayedColumns = this.columns.map(c => c.columnDef);
      }

      this._loglistingService.getLogListForEntity(tableName).subscribe(data => {
        this.dataByAPI = new MatTableDataSource(data);
        this.dataByAPI.sort = this.sort;
        this.dataByAPI.paginator = this.paginator;
      });
    });
  }

  /*
  * applyFilter to apply search on table
  * filterValue: accept string
  */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataByAPI.filter = filterValue;
  }

  /*
  * discriptionLog to populate the data in a Modal
  */
  discriptionLog(row) {
    console.log("in the row test", row);
    const _dialogConfig = new MatDialogConfig();
    _dialogConfig.data = row;
    _dialogConfig.disableClose = false;
    _dialogConfig.autoFocus = true;
    _dialogConfig.width = "50%";
    _dialogConfig.height = "50%";
    this._dialog.open(LogDiscriptionComponent, _dialogConfig);
  }

  isSortingDisabled(columnHeader) {
    if (columnHeader === "BAR CODE") {
      return true;
    }
    return false;
  }

  /**
   * print the documents
   */

  onPrintInvoice() {
    this._printDocumentService.printDocument("invoice");
  }
}
