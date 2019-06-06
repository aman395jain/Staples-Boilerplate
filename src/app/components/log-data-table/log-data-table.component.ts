import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ElementRef,
  Renderer2
} from "@angular/core";
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
import { PromoDetailComponent } from "../promo-detail/promo-detail.component";

import { LoglistingService } from "src/app/services/log-listing/loglisting.service";
import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";
import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";
import { LogDiscriptionDataOrderService } from "src/app/helper/logDiscription/log-discription-data-order.service";

import LogDataTableHelper from "../../helper/logDataTable/log-data-table-advance-search.helper";
import UniqueStoreHelper from "../../helper/uniqueStore/unique-store.helper";
import { logDataTableConst } from "./log-data-table.constant";

/**
 * @class LogDataTableComponent
 * Display the Log-Table according to the table name from Side nav bar.
 */
@Component({
  selector: "staples-log-data-table",
  templateUrl: "./log-data-table.component.html",
  styleUrls: ["./log-data-table.component.scss"]
})
export class LogDataTableComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("advanceSearchForm") advanceSearchForm: ElementRef;

  private _onDestroy = new Subject<void>();

  logTableGridColumns: any = [];
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

  isLoading: boolean = true;
  searchValues: any = {};

  advanceSearchFields = [{ name: "", fieldValue: "" }];
  rowLength: number = 0;
  advanceSearchOptions: string[] = [];

  advanceSearchCollapseStatus: boolean = true;

  constructor(
    private _loglistingService: LoglistingService,
    private _dialog: MatDialog,
    private _navBarService: NavBarService,
    private _printDocumentService: PrintDocumentService,
    private _logModalDataService: LogModalDataService,
    private _logDiscriptionDataOrderService: LogDiscriptionDataOrderService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.logTableGridColumns = logDataTableConst.item_Master;

    this.tableName = "Item_Master";
    this.displayedColumns = this.logTableGridColumns.map(
      columnName => columnName.columnDef
    );
    this.advanceSearchOptions = ["store", "sku", "Description"];

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
          this.storeUniqueData = UniqueStoreHelper.uniqueStore(storeData);

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
          this.logTableGridColumns = logDataTableConst.price_Prompt_Sku;

          this.tableName = "Price_Prompt_SKUs";
          this.displayedColumns = this.logTableGridColumns.map(
            columnName => columnName.columnDef
          );
        } else if (tableName === "Item_Master") {
          this.logTableGridColumns = logDataTableConst.item_Master_Main;

          this.tableName = "Item_Master";
          this.displayedColumns = this.logTableGridColumns.map(
            columnName => columnName.columnDef
          );
        } else if (tableName === "Employee") {
          this.logTableGridColumns = logDataTableConst.employee;

          this.tableName = "Employee";
          this.displayedColumns = this.logTableGridColumns.map(
            columnName => columnName.columnDef
          );
        } else if (tableName === "Linked_SKUs") {
          this.logTableGridColumns = logDataTableConst.linked_SKUs;

          this.tableName = "Linked_SKUs";
          this.displayedColumns = this.logTableGridColumns.map(
            columnName => columnName.columnDef
          );
        } else if (tableName === "Tax_Rates") {
          this.logTableGridColumns = logDataTableConst.tax_Rate;

          this.tableName = "Tax_Rates";
          this.displayedColumns = this.logTableGridColumns.map(
            columnName => columnName.columnDef
          );
        } else if (tableName === "Hardware_SKUs") {
          this.logTableGridColumns = logDataTableConst.hardware_SKUs;

          this.tableName = "Hardware_SKUs";
          this.displayedColumns = this.logTableGridColumns.map(
            columnName => columnName.columnDef
          );
        } else if (tableName === "Free_SKUs") {
          this.logTableGridColumns = logDataTableConst.free_SKUs;

          this.tableName = "Free_SKUs";
          this.displayedColumns = this.logTableGridColumns.map(
            columnName => columnName.columnDef
          );
        } else if (tableName === "Age_Restricted_Special_rest") {
          this.logTableGridColumns =
            logDataTableConst.age_Restricted_Special_rest;

          this.tableName = "Age_Restricted_Special_rest";
          this.displayedColumns = this.logTableGridColumns.map(
            columnName => columnName.columnDef
          );
        } else if (tableName === "Item_Group") {
          this.logTableGridColumns = logDataTableConst.Item_Group;

          this.tableName = "Item_Group";
          this.displayedColumns = this.logTableGridColumns.map(
            columnName => columnName.columnDef
          );
        } else if (tableName === "Return_Driver_License") {
          this.logTableGridColumns = logDataTableConst.return_Driver_License;

          this.tableName = "Return_Driver_License";
          this.displayedColumns = this.logTableGridColumns.map(
            columnName => columnName.columnDef
          );
        } else if (tableName === "Lowest_Price") {
          this.logTableGridColumns = logDataTableConst.lowest_Price;

          this.tableName = "Lowest_Price";
          this.displayedColumns = this.logTableGridColumns.map(
            columnName => columnName.columnDef
          );
        } else if (tableName === "Promos") {
          this.logTableGridColumns = logDataTableConst.Promos;

          this.tableName = "Promos";
          this.displayedColumns = this.logTableGridColumns.map(
            columnName => columnName.columnDef
          );
        } else if (tableName === "POSA") {
          this.tableName = "POSA";
        } else if (tableName === "Order") {
          this.tableName = "Order";
        } else if (tableName === "Coupon") {
          this.tableName = "Coupon";
        } else if (tableName === "Tax_Exempt") {
          this.tableName = "Tax_Exempt";
        } else if (tableName === "Rewards") {
          this.tableName = "Rewards";
        } else if (tableName === "CBP") {
          this.tableName = "CBP";
        } else if (tableName === "CEP") {
          this.tableName = "CEP";
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

            this.storeUniqueData = UniqueStoreHelper.uniqueStore(storeData);
            this.dataByAPI = new MatTableDataSource(data);
            this.dataByAPI.sort = this.sort;
            this.dataByAPI.paginator = this.paginator;
            const advanceSearchDiv = this.advanceSearchForm.nativeElement;
            this._navBarService
              .setAdvanceSearchStatus()
              .subscribe(advanceStatus => {
                this.renderer.setAttribute(
                  advanceSearchDiv,
                  "class",
                  advanceStatus === false
                    ? "col-md-12 advanced-search collapse"
                    : "col-md-12 advanced-search collapse show"
                );
              });

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
              this.paginator.pageSize = 5;
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
    this.dataByAPI.filter = filterValue;
  }

  /*
  * descriptionLogsForModal to populate the data in a Modal
  */
  descriptionLogsForModal(row) {
    this._logDiscriptionDataOrderService.tableNameByComponent(this.tableName);
    this._logModalDataService.getLogModalData(row); //data for print
    const _dialogConfig = new MatDialogConfig();
    _dialogConfig.data = row;
    _dialogConfig.disableClose = false;
    _dialogConfig.autoFocus = true;
    _dialogConfig.width = "50%";
    _dialogConfig.height = "65%";
    this._dialog.open(LogDiscriptionComponent, _dialogConfig);
  }

  descriptionPromos(row) {
    const _dialogConfig = new MatDialogConfig();
    _dialogConfig.data = row;
    _dialogConfig.disableClose = false;
    _dialogConfig.autoFocus = true;
    _dialogConfig.width = "50%";
    _dialogConfig.height = "50%";
    this._dialog.open(PromoDetailComponent, _dialogConfig);
  }

  /**
   * Filter the data on Store.
   * @param event
   */
  onSelectStore(event): void {
    // event will give you full breif of action
    this.selectedStoreValue = event.value;
    UniqueStoreHelper.applyFilterOnStore(
      event.value.toString(),
      this.dataByAPI
    );
  }

  /**
   * Disable the sorting on table.
   * @param columnDef
   */
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
    //console.log("selectedDataForPrint data", this.selectedDataForPrint);
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

  /**
   * Update the page size for pagination on switch of page.
   * @param event
   */
  updatePageSize(event) {
    // console.log("in the page event", event);
    this._navBarService.setPageSize(event.pageSize);
    this._navBarService.setPageLength(event.length);
  }

  /**
   * Events on Advance search link.
   */
  advanceSearch() {
    this.advancedSearchStatus = !this.advancedSearchStatus;
    if (this.advancedSearchStatus) {
      this.selectedOption = "Select a Store";
      this.dataByAPI.filter = null;
      this.dataByAPI.filterPredicate = LogDataTableHelper.customFilterPredicate();
    } else {
      // this._navBarService.getAdvanceSearchStatus(true);
      this.dataByAPI.filter = null;
      this.dataByAPI.filterPredicate = this._logDiscriptionDataOrderService.filterRestrictionOnlyForDisplayedRows(
        "Item_Master"
      );
    }
  }

  /**
   * Adding the dynamic rows in Advance Search Form Upto 3 rows.
   */
  addRowInAdvanceSearch() {
    if (this.rowLength < 2) {
      this.rowLength = this.rowLength + 1;
      this.advanceSearchFields.push({ name: "", fieldValue: "" });
    }
  }

  /**
   * Delete the row from Advance search from on basis of index.
   * @param i Index.
   */
  deleteRowsInAdvanceSearch(i) {
    this.rowLength = this.rowLength - 1;
    this.advanceSearchFields.splice(i, 1);
  }

  /**
   * Advance search form Submittion.
   */
  advanceSearchOnSubmit() {
    let advanceSearchObject = [];
    advanceSearchObject = LogDataTableHelper.advanceSearchDataObject(
      this.advanceSearchFields
    );
    this.dataByAPI.filter = advanceSearchObject[0];
    this.dataByAPI.filterPredicate = LogDataTableHelper.customFilterPredicate();
  }
}
