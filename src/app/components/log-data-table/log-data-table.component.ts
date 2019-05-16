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
import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";
import { LogDiscriptionDataOrderService } from "src/app/helper/logDiscription/log-discription-data-order.service";
import { UniqueStoreService } from "src/app/services/uniqueStore/unique-store.service";

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
  selectedOption: string = "Select a Store";
  selectedStoreValue: string = "8501";

  displayedColumns: object = {};
  dataByAPI: MatTableDataSource<any>;
  storeUniqueData: any = [];

  initialPageSize: number = 5;
  tableName: String = "";
  advancedSearchStatus: boolean = false;

  isLoading = true;

  constructor(
    private _loglistingService: LoglistingService,
    private _dialog: MatDialog,
    private _navBarService: NavBarService,
    private _printDocumentService: PrintDocumentService,
    private _logModalDataService: LogModalDataService,
    private _logDiscriptionDataOrderService: LogDiscriptionDataOrderService,
    private _uniqueStoreService: UniqueStoreService
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
        header: "Description",
        cell: (element: any) => `${element.itemDesc}`
      },
      {
        columnDef: "permPrice",
        header: "Retail Price",
        cell: (element: any) => `${element.permPrice}`
      },
      {
        columnDef: "barCode",
        header: "UPC",
        cell: (element: any) => `${element.upcList[0]}`
      },
      {
        columnDef: "action",
        header: null,
        cell: null
      }
    ];

    this.tableName = "Item_Master";
    this.displayedColumns = this.columns.map(c => c.columnDef);

    try {
      this._loglistingService.getLogList().subscribe(data => {
        this.printedData = data;

        this.isLoading = false;
        let storeData = [];
        storeData.push("Select a Store");
        data.map((dataValue, i) => {
          dataValue["checked"] = false;
          dataValue["index"] = i;
          storeData.push(dataValue.store);
        });
        this.storeUniqueData = this._uniqueStoreService.uniqueStore(storeData);

        this.dataByAPI = new MatTableDataSource(data);
        this.dataByAPI.sort = this.sort;
        this.dataByAPI.paginator = this.paginator;
        this.paginator.pageSize = 5;
        this.dataByAPI.filterPredicate = this._logDiscriptionDataOrderService.filterRestrictionOnlyForDisplayedRows(
          "Item_Master"
        );
      });
    } catch (e) {
      console.log("in the test error", e);
    }
    this._navBarService.getElementName().subscribe(tableName => {
      this.isLoading = true;
      this.selectedDataForPrint = [];
      if (tableName === "Price_Prompt_SKUs") {
        console.log("in the price prompt");
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
            header: "Description",
            cell: (element: any) => `${element.itemDesc}`
          },
          {
            columnDef: "permPrice",
            header: "Retail Price",
            cell: (element: any) => `${element.permPrice}`
          },
          {
            columnDef: "barCode",
            header: "Bar Code",
            cell: (element: any) => `${element.upcList[0]}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.tableName = "Price_Prompt_SKUs";
        this.displayedColumns = this.columns.map(c => c.columnDef);
      } else if (tableName === "Item_Master") {
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
            header: "Description",
            cell: (element: any) => `${element.itemDesc}`
          },
          {
            columnDef: "retailPrice",
            header: "Retail Price",
            cell: (element: any) => `${element.retailPrice}`
          },
          {
            columnDef: "barCode",
            header: "UPC",
            cell: (element: any) => this.barCodeDisplay(element)
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.tableName = "Item_Master";
        this.displayedColumns = this.columns.map(c => c.columnDef);
      } else if (tableName === "Employee") {
        this.columns = [
          {
            columnDef: "select",
            header: null,
            cell: null
          },
          {
            columnDef: "emplName ",
            header: "Employee Name",
            cell: (element: any) => `${element.emplName}`
          },
          {
            columnDef: "password",
            header: "Emp Password",
            cell: (element: any) => `${element.password}`
          },
          {
            columnDef: "emplRole",
            header: "Role",
            cell: (element: any) => `${element.emplRole}`
          },
          {
            columnDef: "store",
            header: "Store",
            cell: (element: any) => `${element.store}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.tableName = "Employee";
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
            header: "SKU",
            cell: (element: any) => `${element.sku}`
          },
          {
            columnDef: "permPrice",
            header: "Retail Price",
            cell: (element: any) => `${element.permPrice}`
          },
          {
            columnDef: "barCode",
            header: "UPC",
            cell: (element: any) => `${element.posId}`
          },
          {
            columnDef: "warranty",
            header: "Warrenty",
            cell: (element: any) => `${element.warranty}`
          },
          {
            columnDef: "itemGroupID",
            header: "Item Group ID",
            cell: (element: any) => `${element.itemGroupID}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.tableName = "Linked_SKUs";
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
            header: "Store",
            cell: (element: any) => `${element.store}`
          },
          {
            columnDef: "rate",
            header: "Tax Rate",
            cell: (element: any) => `${element.rate}`
          },
          {
            columnDef: "taxState",
            header: "State/Jurisdiction",
            cell: (element: any) => `${element.state}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.tableName = "Tax_Rates";
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
            header: "Description",
            cell: (element: any) => `${element.itemDesc}`
          },
          {
            columnDef: "retailPrice",
            header: "Retail Price",
            cell: (element: any) => `${element.retailPrice}`
          },
          {
            columnDef: "barCode",
            header: "UPC",
            cell: (element: any) => this.barCodeDisplay(element)
          },
          {
            columnDef: "vendorName",
            header: "Vendor Name",
            cell: (element: any) => `${element.vendorName}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.tableName = "Hardware_SKUs";
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
            header: "SKU",
            cell: (element: any) => `${element.sku}`
          },
          {
            columnDef: "itemDesc",
            header: "Description",
            cell: (element: any) => `${element.itemDesc}`
          },
          {
            columnDef: "permPrice",
            header: "Retail Price",
            cell: (element: any) => `${element.permPrice}`
          },
          {
            columnDef: "barCode",
            header: "UPC",
            cell: (element: any) => `${element.posId}`
          },
          {
            columnDef: "freeSku",
            header: "Free SKUs",
            cell: (element: any) => `${element.freeSku}`
          },
          {
            columnDef: "freeSkuPrice",
            header: "Free SKU Price",
            cell: (element: any) => `${element.freeSkuPrice}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.tableName = "Free_SKUs";
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
            header: "SKU",
            cell: (element: any) => `${element.sku}`
          },
          {
            columnDef: "itemDesc",
            header: "Description",
            cell: (element: any) => `${element.itemDesc}`
          },
          {
            columnDef: "retailPrice",
            header: "Retail Price",
            cell: (element: any) => `${element.retailPrice}`
          },
          {
            columnDef: "barCode",
            header: "UPC",
            cell: (element: any) => this.barCodeDisplay(element)
          },
          {
            columnDef: "alertCode",
            header: "Alert Code",
            cell: (element: any) => `${element.alertCode}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.tableName = "Age_Restricted_Special_rest";
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
            header: "License No.",
            cell: (element: any) => `${element.licenseNo}`
          },
          {
            columnDef: "licenseFrontPage",
            header: "License Front Image",
            cell: (element: any) => `${element.licenseFrontPage}`
          },
          {
            columnDef: "licenseBackPage",
            header: "License Back Image",
            cell: (element: any) => `${element.licenseBackPage}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.tableName = "Return_Driver_License";
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
            header: "SKU",
            cell: (element: any) => `${element.skuNo}`
          },
          {
            columnDef: "lastTransation",
            header: "Last Transation Date",
            cell: (element: any) => `${element.lastTransation}`
          },
          {
            columnDef: "lowPrice",
            header: "Lowest Price",
            cell: (element: any) => `${element.lowPrice}`
          },
          {
            columnDef: "reason",
            header: "Reason",
            cell: (element: any) => `${element.reason}`
          },
          {
            columnDef: "action",
            header: null,
            cell: null
          }
        ];

        this.tableName = "Lowest_Price";
        this.displayedColumns = this.columns.map(c => c.columnDef);
      }

      this._navBarService.getPageSize().subscribe(size => {
        this.initialPageSize = size;
      });

      this._loglistingService.getLogListForEntity(tableName).subscribe(data => {
        this.isLoading = false;
        let storeData = ["Select a Store"];
        this.storeUniqueData = [];
        this.printedData = data;
        data.map((dataValue, i) => {
          dataValue["checked"] = false;
          dataValue["index"] = i;
          storeData.push(dataValue.store);
        });
        this.selectedOption = "Select a Store";
        console.log("table name", this.tableName);

        this.storeUniqueData = this._uniqueStoreService.uniqueStore(storeData);
        this.dataByAPI = new MatTableDataSource(data);
        console.log("datasource", this.dataByAPI);
        this.dataByAPI.sort = this.sort;
        this.dataByAPI.paginator = this.paginator;
        this.paginator.pageSize = 5;
        if (
          this.tableName === "Item_Master" ||
          this.tableName === "Price_Prompt_SKUs" ||
          this.tableName === "Employee" ||
          this.tableName === "Linked_SKUs" ||
          this.tableName === "Tax_Rates" ||
          this.tableName === "Hardware_SKUs" ||
          this.tableName === "Free_SKUs" ||
          this.tableName === "Age_Restricted_Special_rest"
        ) {
          this.dataByAPI.filterPredicate = this._logDiscriptionDataOrderService.filterRestrictionOnlyForDisplayedRows(
            this.tableName
          );
        }
      });
    });
  }

  /**
   * To display barCode
   * @param element upcList
   */
  barCodeDisplay(element) {
    try {
      return `${element.upcList[0]}`;
    } catch (e) {}
  }

  /*
  * applyFilter to apply search on table
  * filterValue: accept string
  */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    // console.log("in the search filter", this.dataByAPI);
    this.dataByAPI.filter = filterValue;
  }

  /*
  * discriptionLog to populate the data in a Modal
  */
  discriptionLog(row) {
    this._logDiscriptionDataOrderService.tableNameByComponent(this.tableName);

    // console.log("row data", row);

    this._logModalDataService.getLogModalData(row); //data for print
    const _dialogConfig = new MatDialogConfig();
    _dialogConfig.data = row;
    _dialogConfig.disableClose = false;
    _dialogConfig.autoFocus = true;
    _dialogConfig.width = "50%";
    _dialogConfig.height = "65%";
    this._dialog.open(LogDiscriptionComponent, _dialogConfig);
  }

  onSelectStore(event): void {
    // event will give you full breif of action
    console.log("store value", event.value);
    this.selectedStoreValue = event.value;
    this._uniqueStoreService.applyFilterOnStore(
      event.value.toString(),
      this.dataByAPI
    );
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
   * Also push the data in case of selecting Select a Store rows.
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

  getUpdate(event) {
    console.log("in the pag event", event);
    this._navBarService.setPageSize(event.pageSize);
    this._navBarService.setPageLength(event.length);
  }

  advanceSearchStatus() {
    this.advancedSearchStatus = !this.advancedSearchStatus;
    console.log("advanced search clicked", this.advancedSearchStatus);
  }
}
