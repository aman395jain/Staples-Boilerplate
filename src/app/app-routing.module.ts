import { NgModule } from "@angular/core";
import { RouterModule, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { LogsListingComponent } from "./components/logs-listing/logs-listing.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: "", component: HomeComponent },
        { path: "logListing", component: LogsListingComponent },
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
