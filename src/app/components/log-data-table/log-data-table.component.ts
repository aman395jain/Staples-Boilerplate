import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import {
  MatPaginator,
  MatTableDataSource,
  MatSort,
  MatDialogConfig,
  MatDialog
} from "@angular/material";
import "rxjs/add/observable/of";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { LogDiscriptionComponent } from "../log-discription/log-discription.component";
import { LoglistingService } from "src/app/services/log-listing/loglisting.service";
import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";
import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";
import { LogDiscriptionDataOrderService } from "src/app/helper/logDiscription/log-discription-data-order.service";
import { UniqueStoreService } from "src/app/helper/uniqueStore/unique-store.service";

import { logDataTableConst } from "./log-data-table.constant";

@Component({
  selector: "app-log-data-table",
  templateUrl: "./log-data-table.component.html",
  styleUrls: ["./log-data-table.component.scss"]
})
export class LogDataTableComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private _onDestroy = new Subject<void>();

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
    this.columns = logDataTableConst.item_Master;

    this.tableName = "Item_Master";
    this.displayedColumns = this.columns.map(c => c.columnDef);

    try {
      this._loglistingService
        .getLogList()
        .pipe(takeUntil(this._onDestroy))
        .subscribe(data => {
          this.printedData = data;

          this.isLoading = false;
          let storeData = [];
          storeData.push("Select a Store");
          data.map((dataValue, i) => {
            dataValue["checked"] = false;
            dataValue["index"] = i;
            storeData.push(dataValue.store);
          });
          this.storeUniqueData = this._uniqueStoreService.uniqueStore(
            storeData
          );

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
    this._navBarService
      .getElementName()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(tableName => {
        this.isLoading = true;
        this.selectedDataForPrint = [];
        if (tableName === "Price_Prompt_SKUs") {
          console.log("in the price prompt");
          this.columns = logDataTableConst.price_Prompt_Sku;

          this.tableName = "Price_Prompt_SKUs";
          this.displayedColumns = this.columns.map(c => c.columnDef);
        } else if (tableName === "Item_Master") {
          this.columns = logDataTableConst.item_Master_Main;

          this.tableName = "Item_Master";
          this.displayedColumns = this.columns.map(c => c.columnDef);
        } else if (tableName === "Employee") {
          this.columns = logDataTableConst.employee;

          this.tableName = "Employee";
          this.displayedColumns = this.columns.map(c => c.columnDef);
        } else if (tableName === "Linked_SKUs") {
          this.columns = logDataTableConst.linked_SKUs;

          this.tableName = "Linked_SKUs";
          this.displayedColumns = this.columns.map(c => c.columnDef);
        } else if (tableName === "Tax_Rates") {
          this.columns = logDataTableConst.tax_Rate;

          this.tableName = "Tax_Rates";
          this.displayedColumns = this.columns.map(c => c.columnDef);
        } else if (tableName === "Hardware_SKUs") {
          this.columns = logDataTableConst.hardware_SKUs;

          this.tableName = "Hardware_SKUs";
          this.displayedColumns = this.columns.map(c => c.columnDef);
        } else if (tableName === "Free_SKUs") {
          this.columns = logDataTableConst.free_SKUs;

          this.tableName = "Free_SKUs";
          this.displayedColumns = this.columns.map(c => c.columnDef);
        } else if (tableName === "Age_Restricted_Special_rest") {
          this.columns = logDataTableConst.age_Restricted_Special_rest;

          this.tableName = "Age_Restricted_Special_rest";
          this.displayedColumns = this.columns.map(c => c.columnDef);
        } else if (tableName === "Return_Driver_License") {
          this.columns = logDataTableConst.return_Driver_License;

          this.tableName = "Return_Driver_License";
          this.displayedColumns = this.columns.map(c => c.columnDef);
        } else if (tableName === "Lowest_Price") {
          this.columns = logDataTableConst.lowest_Price;

          this.tableName = "Lowest_Price";
          this.displayedColumns = this.columns.map(c => c.columnDef);
        }

        this._navBarService
          .getPageSize()
          .pipe(takeUntil(this._onDestroy))
          .subscribe(size => {
            this.initialPageSize = size;
          });

        this._loglistingService
          .getLogListForEntity(tableName)
          .pipe(takeUntil(this._onDestroy))
          .subscribe(data => {
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
            // console.log("table name", this.tableName);

            this.storeUniqueData = this._uniqueStoreService.uniqueStore(
              storeData
            );
            this.dataByAPI = new MatTableDataSource(data);
            // console.log("datasource", this.dataByAPI);
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

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
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

  doAdvanceFilter() {
    console.log("do advance filter");
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
