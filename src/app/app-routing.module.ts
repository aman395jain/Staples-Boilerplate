import { NgModule } from "@angular/core";
import { RouterModule, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { DisplayLogTableComponent } from "./components/display-log-table/display-log-table.component";

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: "", component: HomeComponent },
        { path: "displayLogListing", component: DisplayLogTableComponent },
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
