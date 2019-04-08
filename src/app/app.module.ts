import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatIconModule } from "@angular/material/icon";
import { CdkColumnDef } from "@angular/cdk/table";
import { NgxBarcodeModule } from "ngx-barcode";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LogsListingComponent } from "./components/logs-listing/logs-listing.component";

import { LoglistingService } from "./services/log-listing/loglisting.service";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LogsListingComponent,
    HeaderComponent,
    FooterComponent
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
    NgxBarcodeModule,
    BrowserAnimationsModule
  ],
  providers: [LoglistingService, CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule {}
