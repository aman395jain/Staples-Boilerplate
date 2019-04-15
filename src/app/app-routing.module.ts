import { NgModule } from "@angular/core";
import { RouterModule, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { DisplayLogTableComponent } from "./components/dashboard-log-table/dashboard-log-table.component";
import { TestDataTableComponent } from "./components/test-data-table/test-data-table.component";
import { HeaderComponent } from "./shared/header/header.component";
import { TestNavBarComponent } from "./shared/test-nav-bar/test-nav-bar.component";

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: "", component: HomeComponent },
        { path: "displayLogListing", component: DisplayLogTableComponent },
        { path: "testDataTable", component: TestDataTableComponent },
        { path: "testHeader", component: HeaderComponent },
        { path: "testNavBar", component: TestNavBarComponent },
        { path: "**", component: PageNotFoundComponent }
      ],
      {
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
