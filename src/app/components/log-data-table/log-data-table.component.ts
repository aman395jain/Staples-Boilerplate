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
  selector: "app-log-data-table",
  templateUrl: "./log-data-table.component.html",
  styleUrls: ["./log-data-table.component.scss"]
})
export class LogDataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columns = [];
  printedData = [];
  checkBoxStatus: boolean = false;
  selectedDataForPrint = [];
  selectAll = false;

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
        columnDef: "select",
        header: null,
        cell: null
      },
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
        this.printedData = data;

        data.map(dataValue => {
          dataValue["checked"] = false;
        });
        // console.log("data value", data);
        this.dataByAPI = new MatTableDataSource(data);
        this.dataByAPI.sort = this.sort;
        this.dataByAPI.paginator = this.paginator;
      });
    } catch (e) {
      console.log("in the test error", e);
    }
    this._navBarService.getElementName().subscribe(tableName => {
      if (tableName === "Price_Prompt_SKUs") {
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
      } else if (tableName === "Hardware_SKUs") {
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
        this.printedData = data;
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

  isSortingDisabled(columnDef) {
    if (columnDef === "barCode" || columnDef === "select") {
      return true;
    }
    return false;
  }

  /**
   * print the documents
   */

  onPrintInvoice() {
    console.log("selectedDataForPrint data", this.selectedDataForPrint);
    this._loglistingService.getTestDataToPrint(this.selectedDataForPrint);
    this._printDocumentService.printDocument(
      "invoice",
      this.selectedDataForPrint
    );
  }

  // checkbox status
  checkedRowForPrint(selectedRows, index, event) {
    if (event.checked) {
      // console.log("the printed data", this.printedData);
      selectedRows.checked = true;
      selectedRows.index = index;

      this.selectedDataForPrint.push(selectedRows);
    } else {
      // uncheck case
      // console.log("the printed data", this.printedData);
      selectedRows.checked = false;
      this.selectedDataForPrint.splice(
        this.selectedDataForPrint.findIndex(function(i) {
          return i.index === index;
        }),
        1
      );
    }
    if (this.printedData.every(dataRow => dataRow.checked)) {
      this.selectAll = true;
    } else {
      this.selectAll = false;
    }

    // console.log("selectedDataForPrint", this.selectedDataForPrint);
  }

  /**
   * Maintain the status of checkbox in data table.
   * @param row: get the row and check it's checked status.
   * return boolean
   */

  isSelected(row) {
    if (row.checked) {
      return true;
    }
    return false;
  }

  updateCheck() {
    this.selectedDataForPrint = [];
    if (this.selectAll === true) {
      this.printedData.map(dataRow => {
        dataRow.checked = true;
        this.selectedDataForPrint.push(dataRow);
      });
    } else {
      this.printedData.map(dataRow => {
        this.selectedDataForPrint = [];
        dataRow.checked = false;
      });
    }
  }
}
