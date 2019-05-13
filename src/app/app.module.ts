import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatIconModule,
  MatDialogModule,
  MatMenuModule,
  MatSidenavModule,
  MatExpansionModule,
  MatListModule,
  MatCheckboxModule,
  MatSelectModule,
  MatCardModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { CdkColumnDef, CdkTableModule } from "@angular/cdk/table";
import { NgxBarcodeModule } from "ngx-barcode";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularSplitModule } from "angular-split";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LogDataTableComponent } from "./components/log-data-table/log-data-table.component";
import { SideNavBarComponent } from "./shared/side-nav-bar/side-nav-bar.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { LogDiscriptionComponent } from "./components/log-discription/log-discription.component";
import { DisplayLogTableComponent } from "./components/dashboard-log-table/dashboard-log-table.component";
import { PrintDocumentSingleLogDataComponent } from "./components/print-document-single-log-data/print-document-single-log-data.component";
import { PrintDocumentLayoutComponent } from "./shared/print-document-layout/print-document-layout.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";

import { NavBarService } from "./services/nav-bar/nav-bar.service";
import { LoglistingService } from "./services/log-listing/loglisting.service";
import { PrintDocumentService } from "./services/print-document/print-document.service";
import { TableForStorePipe } from "./pipes/tableForStoreNumber/table-for-store.pipe";
import { LogModalDataService } from "./services/log-modal-data/log-modal-data.service";
import { PrintDocumentComponent } from "./components/print-document/print-document.component";
import { LogDiscriptionDataOrderService } from "./helper/logDiscription/log-discription-data-order.service";
import { UniqueStoreService } from "./services/uniqueStore/unique-store.service";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LogDiscriptionComponent,
    DisplayLogTableComponent,
    LogDataTableComponent,
    SideNavBarComponent,
    PrintDocumentLayoutComponent,
    PrintDocumentComponent,
    TableForStorePipe,
    PrintDocumentSingleLogDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatListModule,
    MatSidenavModule,
    NgxBarcodeModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CdkTableModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    MatProgressSpinnerModule,
    AngularSplitModule.forRoot()
  ],
  entryComponents: [LogDiscriptionComponent],
  providers: [
    LoglistingService,
    CdkColumnDef,
    NavBarService,
    PrintDocumentService,
    LogModalDataService,
    LogDiscriptionDataOrderService,
    UniqueStoreService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
