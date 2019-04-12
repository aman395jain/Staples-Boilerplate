import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import { LoglistingService } from "src/app/services/log-listing/loglisting.service";

@Component({
  selector: "app-test-data-table",
  templateUrl: "./test-data-table.component.html",
  styleUrls: ["./test-data-table.component.scss"]
})
export class TestDataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columns = [
    {
      columnDef: "position",
      header: "No.",
      cell: (element: any) => `${element.position}`
    },
    {
      columnDef: "name",
      header: "Name",
      cell: (element: any) => `${element.name}`
    },
    {
      columnDef: "weight",
      header: "Weight",
      cell: (element: any) => `${element.weight}`
    },
    {
      columnDef: "symbol",
      header: "Symbol",
      cell: (element: any) => `${element.symbol}`
    }
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource = new ExampleDataSource();
  dataSource1: MatTableDataSource<any>;
  constructor(private _loglistingService: LoglistingService) {}

  ngOnInit() {
    try {
      this._loglistingService.getLogList().subscribe(data => {
        console.log("in the test data table", this.displayedColumns);
        this.dataSource1 = new MatTableDataSource(data);
      });
    } catch (e) {
      console.log("in the test error", e);
    }
  }
}

const ELEMENT_DATA: any[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" }
];

export class ExampleDataSource extends DataSource<any> {
  connect(): Observable<Element[]> {
    return Observable.of(ELEMENT_DATA);
  }

  disconnect() {}
}
