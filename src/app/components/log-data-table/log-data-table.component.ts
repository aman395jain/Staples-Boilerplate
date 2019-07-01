import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ElementRef,
  Renderer2
} from "@angular/core";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import "rxjs/add/observable/of";
import { Subject } from "rxjs";
import { takeUntil, debounceTime } from "rxjs/operators";
import { Router } from "@angular/router";

import { LoglistingService } from "src/app/services/log-listing/loglisting.service";
import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";
import { PrintDocumentService } from "src/app/services/print-document/print-document.service";
import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";
import { LogDescriptionDataOrderService } from "src/app/helper/logDescription/log-description-data-order.service";

import LogDataTableHelper from "../../helper/logDataTable/log-data-table-advance-search.helper";
import UniqueStoreHelper from "../../helper/uniqueStore/unique-store.helper";
import { logDataTableConst } from "./log-data-table.constant";
import { PaginationForLongDataService } from "src/app/services/pagination-for-longData/pagination-for-long-data.service";

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
  dataByAPI: MatTableDataSource<any>;

  private _onDestroy = new Subject<void>();

  logTableGridColumns: any[] = [];
  printedData: any[] = [];
  checkBoxStatus: boolean = false;
  selectedDataForPrint: any[] = [];
  selectAll: boolean = false;
  selectedOption: string = "Select a Store";
  selectedStoreValue: string = "8501";
  displayedColumns: object = {};
  storeUniqueData: any = [];
  newOrderType: any = [];
  initialPageSize: number = 5;
  tableName: String = "";
  advancedSearchStatus: boolean = false;
  isLoading: boolean = true;
  searchValues: any = {};
  advanceSearchFields = [{ name: "", fieldValue: "" }];
  rowLength: number = 0;
  advanceSearchOptions: string[] = [];
  advanceSearchCollapseStatus: boolean = true;
  logDetailsFlag: any = false;
  kioskOrderFormFlag: any = false;
  tableHeader: string;
  indexForLog: number;
  tableNameFromBar: string;
  paginationBarDisplayFlag: boolean = true;

  constructor(
    private _loglistingService: LoglistingService,
    private _navBarService: NavBarService,
    private _paginationForLongDataService: PaginationForLongDataService,
    private _printDocumentService: PrintDocumentService,
    private _logModalDataService: LogModalDataService,
    private _logDescriptionDataOrderService: LogDescriptionDataOrderService,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.router.url === "/testDataManagement") {
      this._logModalDataService.getLogDetailFlag(false);
      this._logModalDataService.getKioskOrderFlag(false);
    } else {
      this._logModalDataService.getLogDetailFlag(true);
      this._logModalDataService.getKioskOrderFlag(true);
    }
    if (
      this.router.url === "/testDataManagement/new-kiosk-order" ||
      "/testDataManagement/new-solution-builder-order"
    ) {
      this.router.navigate(["/testDataManagement"]);
    }
    this.logTableGridColumns = logDataTableConst.item_Master;

    this._logModalDataService.setLogDetailFlag().subscribe(flag => {
      this.logDetailsFlag = flag;
    });
    this._logModalDataService.setKioskOrderFlag().subscribe(flag => {
      this.kioskOrderFormFlag = flag;
    });

    this._logModalDataService.getTableNameForLogDetail("Item_Master");

    this.tableName = "Item_Master";
    this.displayedColumns = logDataTableConst.item_Master.map(
      columnName => columnName.columnDef
    );
    this.advanceSearchOptions = ["store", "sku", "Description"];
    this.tableHeader = "Item Master";

    try {
      this._paginationForLongDataService
        .setIndexPagination()
        .subscribe(index => {
          this._loglistingService
            .getLogList(index)
            .pipe(takeUntil(this._onDestroy))
            .subscribe(data => {
              if (data.pagiCount < 100) {
                this.paginationBarDisplayFlag = false;
              } else {
                this.paginationBarDisplayFlag = true;
                this._paginationForLongDataService.getNumberOfRowsForPagination(
                  data.pagiCount
                );
              }

              data = data.list;

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
              if (this.paginator) {
                this.paginator.pageSize = 5;
              }
              this.dataByAPI.filterPredicate = this._logDescriptionDataOrderService.filterRestrictionOnlyForDisplayedRows(
                "Item_Master"
              );
            });
        });
    } catch (e) {
      console.log("in the test error", e);
    }

    this._navBarService
      .getElementName()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(tableInfoFromSideNav => {
        this.tableNameFromBar = tableInfoFromSideNav.tableName;
        this.indexForLog = tableInfoFromSideNav.intialIndex;
        // this.isLoading = true;
        this.selectedDataForPrint = [];

        if (this.tableNameFromBar === "Item_Master") {
          this.logTableGridColumns = logDataTableConst.item_Master_Main;
          this.tableName = "Item_Master";
          this._logModalDataService.getTableNameForLogDetail("Item_Master");
          this.displayedColumns = logDataTableConst.item_Master_Main.map(
            columnName => columnName.columnDef
          );
          this.tableHeader = "Item Master";
        } else if (this.tableNameFromBar === "Hardware_SKUs") {
          this.advanceSearchOptions = ["Description", "SKU", "Retail Price"];
          this.logTableGridColumns = logDataTableConst.hardware_SKUs;
          this._logModalDataService.getTableNameForLogDetail("Hardware_SKUs");

          this.tableName = "Hardware_SKUs";
          this.displayedColumns = logDataTableConst.hardware_SKUs.map(
            columnName => columnName.columnDef
          );
          this.tableHeader = "Hardware SKUs";
        } else if (this.tableNameFromBar === "Price_Prompt_SKUs") {
          this.advanceSearchOptions = ["Description", "SKU", "Retail Price"];
          this.logTableGridColumns = logDataTableConst.price_Prompt_Sku;

          this.tableName = "Price_Prompt_SKUs";
          this._logModalDataService.getTableNameForLogDetail(
            "Price_Prompt_SKUs"
          );
          this.displayedColumns = logDataTableConst.price_Prompt_Sku.map(
            columnName => columnName.columnDef
          );
          this.tableHeader = "Price Prompt SKUs";
        } else if (this.tableNameFromBar === "Employee") {
          this.advanceSearchOptions = ["Location", "Employee ID", "Role"];
          this.logTableGridColumns = logDataTableConst.employee;

          this.tableName = "Employee";

          this._logModalDataService.getTableNameForLogDetail("Employee");
          this.displayedColumns = logDataTableConst.employee.map(
            columnName => columnName.columnDef
          );
          this.tableHeader = "Employee";
        } else if (this.tableNameFromBar === "Linked_SKUs") {
          this.advanceSearchOptions = ["Description", "SKU", "Retail Price"];
          this.logTableGridColumns = logDataTableConst.linked_SKUs;

          this.tableName = "Linked_SKUs";
          this._logModalDataService.getTableNameForLogDetail("Linked_SKUs");
          this.displayedColumns = logDataTableConst.linked_SKUs.map(
            columnName => columnName.columnDef
          );
          this.tableHeader = "Linked SKUs";
        } else if (this.tableNameFromBar === "Tax_Rates") {
          this.advanceSearchOptions = ["Rate", "City", "State"];
          this.logTableGridColumns = logDataTableConst.tax_Rate;
          this._logModalDataService.getTableNameForLogDetail("Tax_Rates");

          this.tableName = "Tax_Rates";
          this.displayedColumns = logDataTableConst.tax_Rate.map(
            columnName => columnName.columnDef
          );
          this.tableHeader = "Tax Rates";
        } else if (this.tableNameFromBar === "Bag_Fee_SKUs") {
          this.advanceSearchOptions = ["Description", "SKU", "Retail Price"];
          this.logTableGridColumns = logDataTableConst.bag_Fee_SKUs;
          this._logModalDataService.getTableNameForLogDetail("Bag_Fee_SKUs");

          this.tableName = "Bag_Fee_SKUs";
          this.displayedColumns = logDataTableConst.bag_Fee_SKUs.map(
            columnName => columnName.columnDef
          );
          this.tableHeader = "Bag Fee SKUs";
        } else if (this.tableNameFromBar === "Age_Restricted_Special_rest") {
          this.advanceSearchOptions = ["Description", "SKU", "Retail Price"];
          this.logTableGridColumns =
            logDataTableConst.age_Restricted_Special_rest;
          this._logModalDataService.getTableNameForLogDetail(
            "Age_Restricted_Special_rest"
          );

          this.tableName = "Age_Restricted_Special_rest";
          this.displayedColumns = logDataTableConst.age_Restricted_Special_rest.map(
            columnName => columnName.columnDef
          );
          this.tableHeader = "Age Restricted Special Rest";
        } else if (this.tableNameFromBar === "Item_Group") {
          this.logTableGridColumns = logDataTableConst.Item_Group;
          this._logModalDataService.getTableNameForLogDetail("Item_Group");

          this.tableName = "Item_Group";
          this.displayedColumns = logDataTableConst.Item_Group.map(
            columnName => columnName.columnDef
          );
          this.tableHeader = "Item Group";
        } else if (this.tableNameFromBar === "Return_Driver_License") {
          this.logTableGridColumns = logDataTableConst.return_Driver_License;
          this._logModalDataService.getTableNameForLogDetail(
            "Return_Driver_License"
          );

          this.tableName = "Return_Driver_License";
          this.displayedColumns = logDataTableConst.return_Driver_License.map(
            columnName => columnName.columnDef
          );
          this.tableHeader = "Return Driver Licence";
        } else if (this.tableNameFromBar === "Lowest_Price") {
          this.logTableGridColumns = logDataTableConst.lowest_Price;
          this._logModalDataService.getTableNameForLogDetail("Lowest_Price");

          this.tableName = "Lowest_Price";
          this.displayedColumns = logDataTableConst.lowest_Price.map(
            columnName => columnName.columnDef
          );
          this.tableHeader = "Lowest Price";
        } else if (this.tableNameFromBar === "Promos") {
          this.advanceSearchOptions = ["Discount Type", "Store", "Promo Name"];
          this.logTableGridColumns = logDataTableConst.Promos;
          this._logModalDataService.getTableNameForLogDetail("Promos");

          this.tableName = "Promos";
          this.displayedColumns = logDataTableConst.Promos.map(
            columnName => columnName.columnDef
          );
          this.tableHeader = "Promos";
        } else if (this.tableNameFromBar === "POSA") {
          this.tableName = "POSA";
          this.tableHeader = "POSA";
        } else if (this.tableNameFromBar === "Order") {
          this.advanceSearchOptions = ["Order Type", "Expiry Date", "Source"];
          this.logTableGridColumns = logDataTableConst.Order;
          this._logModalDataService.getTableNameForLogDetail("Order");

          this.tableName = "Order";
          this.displayedColumns = logDataTableConst.Order.map(
            columnName => columnName.columnDef
          );
          this.tableHeader = "Order";
          this.newOrderType = ["Kiosk", "Solution Builder"];
        } else if (this.tableNameFromBar === "Coupon") {
          this.tableName = "Coupon";
          this.tableHeader = "Coupon";
        } else if (this.tableNameFromBar === "Tax_Exempt") {
          this.logTableGridColumns = logDataTableConst.Tax_Exempt;
          this._logModalDataService.getTableNameForLogDetail("Tax_Exempt");

          this.tableName = "Tax_Exempt";
          this.displayedColumns = logDataTableConst.Tax_Exempt.map(
            columnName => columnName.columnDef
          );
          this.tableHeader = "Tax Exempt";
        } else if (this.tableNameFromBar === "Rewards") {
          this.tableName = "Rewards";
        } else if (this.tableNameFromBar === "CBP") {
          this.tableName = "CBP";
        } else if (this.tableNameFromBar === "CEP") {
          this.tableName = "CEP";
        }

        console.log("table name is:", this.tableNameFromBar);
        console.log("index from side nav: ", this.indexForLog);

        this._loglistingService
          .getLogListForEntity(this.tableNameFromBar, this.indexForLog)
          .pipe(takeUntil(this._onDestroy))
          .subscribe(data => {
            console.log("data fake is:", data);
            if (data.pagiCount < 100) {
              this.paginationBarDisplayFlag = false;
            } else {
              this.paginationBarDisplayFlag = true;
              this._paginationForLongDataService.getNumberOfRowsForPagination(
                data.pagiCount
              );
            }
            data = data.list;
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
            this.paginator.pageSize = 5;
            this.dataByAPI.filterPredicate = this._logDescriptionDataOrderService.filterRestrictionOnlyForDisplayedRows(
              this.tableName
            );
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

  /**
   * Populate the details of a single row on log-detail page.
   * @param row
   */
  launchLogsForSingleEntity(row) {
    this._logModalDataService.getLogDetailData(row);
    this._logModalDataService.getLogModalData(row); //data for print
    if (this.tableName === "Linked_SKUs") {
      this._loglistingService.postLinkedListSKUs(row.sku).subscribe(data => {
        this._logModalDataService.getLinkedSKUsData(data);
      });
    }
    this.logDetailsFlag = true;
    this.router.navigate(["/testDataManagement/logDetail"]);
  }

  /**
   * Filter the data on Store.
   * @param event
   */
  onSelectStore(event): void {
    this.selectedStoreValue = event.value;
    UniqueStoreHelper.applyFilterOnStore(
      event.value.toString(),
      this.dataByAPI
    );
  }

  onSelectOrderType(event): void {
    console.log("On selection of order type: ", event.value);
    if (event.value === "Kiosk") {
      this.kioskOrderFormFlag = true;
      this.router.navigate(["/testDataManagement/new-kiosk-order"]);
    } else if (event.value === "Solution Builder") {
      this.kioskOrderFormFlag = true;
      this.router.navigate(["/testDataManagement/new-solution-builder-order"]);
    }
  }

  createKioskOrder() {
    this.kioskOrderFormFlag = true;
    this.router.navigate(["/testDataManagement/new-kiosk-order"]);
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
      this.dataByAPI.filterPredicate = LogDataTableHelper.customFilterPredicate(
        this.tableName
      );
    } else {
      //collapse of accordian.
      this.advanceSearchFields = [{ name: "", fieldValue: "" }];
      this.dataByAPI.filter = null;
      this.dataByAPI.filterPredicate = this._logDescriptionDataOrderService.filterRestrictionOnlyForDisplayedRows(
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
    this.dataByAPI.filterPredicate = LogDataTableHelper.customFilterPredicate(
      this.tableName
    );
  }

  /**
   * Clear the search fields in Advance search.
   */
  clearSearchFields() {
    this.advanceSearchFields = [{ name: "", fieldValue: "" }];
    this.dataByAPI.filter = null;
  }
}
