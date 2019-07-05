import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { CdkColumnDef, CdkTableModule } from "@angular/cdk/table";
import { NgxBarcodeModule } from "ngx-barcode";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularSplitModule } from "angular-split";
import { MaterialModule } from "./helper/material.module";
import { StaplesRtdmRoutingModule } from "./staplesRTDM-routing.module";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";

import { StaplesRtdmApplicationComponent } from "./staplesRTDM.component";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LogDataTableComponent } from "./components/log-data-table/log-data-table.component";
import { SideNavBarComponent } from "./shared/side-nav-bar/side-nav-bar.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { PromoDetailComponent } from "./components/promo-detail/promo-detail.component";
import { LogDetailComponent } from "./components/log-detail/log-detail.component";
import { KioskTableComponent } from "./shared/kiosk-table/kiosk-table.component";
import { PrintDocumentComponent } from "./components/print-document/print-document.component";
import { SolutionBuilderOrderComponent } from "./shared/solution-builder-order/solution-builder-order.component";
import { LogDescriptionComponent } from "./components/log-description/log-description.component";
import { DisplayLogTableComponent } from "./components/dashboard-log-table/dashboard-log-table.component";
import { PrintDocumentSingleLogDataComponent } from "./components/print-document-single-log-data/print-document-single-log-data.component";
import { PrintDocumentLayoutComponent } from "./shared/print-document-layout/print-document-layout.component";

import { NavBarService } from "./services/nav-bar/nav-bar.service";
import { LoglistingService } from "./services/log-listing/loglisting.service";
import { PrintDocumentService } from "./services/print-document/print-document.service";
import { LogModalDataService } from "./services/log-modal-data/log-modal-data.service";
import { LogDescriptionDataOrderService } from "./helper/logDescription/log-description-data-order.service";
import { KioskOrderService } from "./services/kiosk-order/kiosk-order.service";

import { TableForStorePipe } from "./pipes/tableForStoreNumber/table-for-store.pipe";
import { PaginationForLargeDataComponent } from "./shared/pagination-for-large-data/pagination-for-large-data.component";
import { PaginationForLongDataService } from "./services/pagination-for-longData/pagination-for-long-data.service";
import { SkuListComponent } from "./shared/sku-list/sku-list.component";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [
    StaplesRtdmApplicationComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LogDescriptionComponent,
    DisplayLogTableComponent,
    LogDataTableComponent,
    SideNavBarComponent,
    PrintDocumentLayoutComponent,
    PrintDocumentComponent,
    TableForStorePipe,
    PrintDocumentSingleLogDataComponent,
    PromoDetailComponent,
    LogDetailComponent,
    KioskTableComponent,
    SolutionBuilderOrderComponent,
    PaginationForLargeDataComponent,
    SkuListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StaplesRtdmRoutingModule,
    MaterialModule,
    NgxBarcodeModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CdkTableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    NgbPaginationModule,
    AngularSplitModule.forRoot()
  ],
  entryComponents: [LogDescriptionComponent, PromoDetailComponent],
  providers: [
    LoglistingService,
    CdkColumnDef,
    NavBarService,
    PrintDocumentService,
    LogModalDataService,
    LogDescriptionDataOrderService,
    KioskOrderService,
    PaginationForLongDataService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [StaplesRtdmApplicationComponent]
})
export class StaplesRTDMModule {}
