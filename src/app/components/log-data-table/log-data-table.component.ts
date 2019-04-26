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

  columns: any = [];
  printedData: any = [];
  checkBoxStatus: boolean = false;
  selectedDataForPrint: any = [];
  selectAll: boolean = false;
  selectedOption: string;

  displayedColumns: object = {};
  dataByAPI: MatTableDataSource<any>;
  storeUniqueData: any = [];
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
        columnDef: "barCode",
        header: "BAR CODE",
        cell: (element: any) => `${element.posId}`
      },
      {
        columnDef: "action",
        header: null,
        cell: null
      }
    ];

    this.displayedColumns = this.columns.map(c => c.columnDef);

    try {
      this._loglistingService.getLogList().subscribe(data => {
        this.printedData = data;

        let storeData = [];
        data.map((dataValue, i) => {
          dataValue["checked"] = false;
          dataValue["index"] = i;
          storeData.push(dataValue.store);
        });
        this.storeUniqueData = this.uniqueStore(storeData);
        console.log("data value", this.storeUniqueData);

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
            header: null,
            cell: null
          }
        ];

        this.displayedColumns = this.columns.map(c => c.columnDef);
      } else if (tableName === "Employee") {
        this.columns = [
          {
            columnDef: "select",
            header: null,
            cell: null
          },
          {
            columnDef: "empName ",
            header: "EMPLOYEE NAME",
            cell: (element: any) => `${element.empName}`
          },
          {
            columnDef: "empPass",
            header: "EMPLOYEE PASSOWORD",
            cell: (element: any) => `${element.empPass}`
          },
          {
            columnDef: "empRole",
            header: "EMPLOYEE ROLE",
            cell: (element: any) => `${element.empRole}`
          },
          {
            columnDef: "store",
            header: "STORE",
            cell: (element: any) => `${element.store}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.displayedColumns = this.columns.map(c => c.columnDef);
      } else if (tableName === "Linked_SKUs") {
        this.columns = [
          {
            columnDef: "select",
            header: null,
            cell: null
          },
          {
            columnDef: "sku",
            header: "SKU NO.",
            cell: (element: any) => `${element.sku}`
          },
          {
            columnDef: "permPrice",
            header: "RETAIL PRICE",
            cell: (element: any) => `${element.permPrice}`
          },
          {
            columnDef: "barCode",
            header: "UPC",
            cell: (element: any) => `${element.posId}`
          },
          {
            columnDef: "warranty",
            header: "WARRANTY",
            cell: (element: any) => `${element.warranty}`
          },
          {
            columnDef: "itemGroupID",
            header: "ITEM GROUP ID",
            cell: (element: any) => `${element.itemGroupID}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.displayedColumns = this.columns.map(c => c.columnDef);
      } else if (tableName === "Tax_Rates") {
        this.columns = [
          {
            columnDef: "select",
            header: null,
            cell: null
          },
          {
            columnDef: "store ",
            header: "STORE",
            cell: (element: any) => `${element.store}`
          },
          {
            columnDef: "taxRate",
            header: "TAX RATE",
            cell: (element: any) => `${element.taxRate}`
          },
          {
            columnDef: "taxState",
            header: "STATE",
            cell: (element: any) => `${element.taxState}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.displayedColumns = this.columns.map(c => c.columnDef);
      } else if (tableName === "Hardware_SKUs") {
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
            columnDef: "barCode",
            header: "BAR CODE",
            cell: (element: any) => `${element.posId}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.displayedColumns = this.columns.map(c => c.columnDef);
      } else if (tableName === "Free_SKUs") {
        this.columns = [
          {
            columnDef: "select",
            header: null,
            cell: null
          },
          {
            columnDef: "sku",
            header: "SKU No.",
            cell: (element: any) => `${element.sku}`
          },
          {
            columnDef: "itemDesc",
            header: "ITEM DESCRIPTION",
            cell: (element: any) => `${element.itemDesc}`
          },
          {
            columnDef: "permPrice",
            header: "RETAIL PRICE",
            cell: (element: any) => `${element.permPrice}`
          },
          {
            columnDef: "barCode",
            header: "UPC",
            cell: (element: any) => `${element.posId}`
          },
          {
            columnDef: "freeSku",
            header: "FREE SKUs",
            cell: (element: any) => `${element.freeSku}`
          },
          {
            columnDef: "freeSkuPrice",
            header: "FREE SKU PRICE",
            cell: (element: any) => `${element.freeSkuPrice}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.displayedColumns = this.columns.map(c => c.columnDef);
      } else if (tableName === "Age_Restricted_Special_rest") {
        this.columns = [
          {
            columnDef: "select",
            header: null,
            cell: null
          },
          {
            columnDef: "sku",
            header: "SKU No.",
            cell: (element: any) => `${element.sku}`
          },
          {
            columnDef: "itemDesc",
            header: "ITEM DESCRIPTION",
            cell: (element: any) => `${element.itemDesc}`
          },
          {
            columnDef: "retailPrice",
            header: "RETAIL PRICE",
            cell: (element: any) => `${element.retailPrice}`
          },
          {
            columnDef: "barCode",
            header: "UPC",
            cell: (element: any) => `${element.barCode}`
          },
          {
            columnDef: "itemGroupID",
            header: "ITEM GROUP ID",
            cell: (element: any) => `${element.itemGroupID}`
          },
          {
            columnDef: "alertCode",
            header: "ALERT CODE",
            cell: (element: any) => `${element.alertCode}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.displayedColumns = this.columns.map(c => c.columnDef);
      } else if (tableName === "Return_Driver_License") {
        this.columns = [
          {
            columnDef: "select",
            header: null,
            cell: null
          },
          {
            columnDef: "licenseNo",
            header: "LICENSE No.",
            cell: (element: any) => `${element.licenseNo}`
          },
          {
            columnDef: "licenseFrontPage",
            header: "LICENSE FRONT IMAGE",
            cell: (element: any) => `${element.licenseFrontPage}`
          },
          {
            columnDef: "licenseBackPage",
            header: "LICENSE BACK IMAGE",
            cell: (element: any) => `${element.licenseBackPage}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.displayedColumns = this.columns.map(c => c.columnDef);
      } else if (tableName === "Lowest_Price") {
        this.columns = [
          {
            columnDef: "select",
            header: null,
            cell: null
          },
          {
            columnDef: "skuNo",
            header: "SKU No.",
            cell: (element: any) => `${element.skuNo}`
          },
          {
            columnDef: "lastTransation",
            header: "LAST TRANSTION DATE",
            cell: (element: any) => `${element.lastTransation}`
          },
          {
            columnDef: "lowPrice",
            header: "LOWEST PRICE",
            cell: (element: any) => `${element.lowPrice}`
          },
          {
            columnDef: "reason",
            header: "REASON",
            cell: (element: any) => `${element.reason}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.displayedColumns = this.columns.map(c => c.columnDef);
      }

      this._loglistingService.getLogListForEntity(tableName).subscribe(data => {
        let storeData = [];
        this.printedData = data;
        data.map((dataValue, i) => {
          dataValue["checked"] = false;
          dataValue["index"] = i;
          storeData.push(dataValue.store);
        });

        this.storeUniqueData = this.uniqueStore(storeData);
        console.log("unique store value", this.storeUniqueData);
        this.dataByAPI = new MatTableDataSource(data);
        this.dataByAPI.sort = this.sort;
        this.dataByAPI.paginator = this.paginator;
      });
    });
  }

  /**
   * uniqueStore: find out the unique store values.
   */

  uniqueStore = storeData => {
    let aux = {};
    return storeData.reduce((tot, curr) => {
      console.log("in the unique store", aux[curr]);
      if (!aux[curr]) {
        aux[curr] = 1;
        tot.push(curr);
      }
      return tot;
    }, []);
  };

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
    this._printDocumentService.printDocument("invoice");
  }

  // checkbox status
  checkedRowForPrint(selectedRows, event) {
    if (event.checked) {
      selectedRows.checked = true;
      this.selectedDataForPrint.push(selectedRows);
    } else {
      // uncheck case
      let index = selectedRows.index;
      this.selectedDataForPrint.splice(
        this.selectedDataForPrint.findIndex(function(i) {
          return i.index === index;
        }),
        1
      );

      selectedRows.checked = false;
    }
  }

  checkBoxStatusForHeader() {
    if (this.printedData.every(dataRow => dataRow.checked)) {
      this.selectAll = true;
    } else {
      this.selectAll = false;
    }
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

  /**
   * updateCheck: Check the status of header check-box.
   * Also push the data in case of selecting all rows.
   */
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
