import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material";
import { MatPaginatorModule } from "@angular/material/paginator";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LogsListingComponent } from "./components/logs-listing/logs-listing.component";

import { LoglistingService } from "./services/log-listing/loglisting.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LogsListingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [LoglistingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
