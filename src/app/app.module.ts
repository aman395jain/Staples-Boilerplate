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
  MatListModule
} from "@angular/material";
import { CdkColumnDef, CdkTableModule } from "@angular/cdk/table";
import { NgxBarcodeModule } from "ngx-barcode";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LogsListingComponent } from "./components/logs-listing/logs-listing.component";

import { LoglistingService } from "./services/log-listing/loglisting.service";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { LogDiscriptionComponent } from "./components/log-discription/log-discription.component";
import { SideNavBarComponent } from "./shared/side-nav-bar/side-nav-bar.component";
import { DisplayLogTableComponent } from "./components/dashboard-log-table/dashboard-log-table.component";
import { NavBarService } from "./services/nav-bar/nav-bar.service";
import { TestDataTableComponent } from "./components/test-data-table/test-data-table.component";
import { CommonModule } from "@angular/common";
import { TestNavBarComponent } from "./shared/test-nav-bar/test-nav-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LogsListingComponent,
    HeaderComponent,
    FooterComponent,
    LogDiscriptionComponent,
    SideNavBarComponent,
    DisplayLogTableComponent,
    TestDataTableComponent,
    TestNavBarComponent
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
    MatExpansionModule,
    MatListModule,
    MatSidenavModule,
    NgxBarcodeModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CdkTableModule,
    CommonModule
  ],
  entryComponents: [LogDiscriptionComponent],
  providers: [LoglistingService, CdkColumnDef, NavBarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
