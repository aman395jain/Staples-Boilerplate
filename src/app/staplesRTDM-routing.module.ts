import { NgModule } from "@angular/core";
import { RouterModule, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { DisplayLogTableComponent } from "./components/dashboard-log-table/dashboard-log-table.component";
import { PrintDocumentLayoutComponent } from "./shared/print-document-layout/print-document-layout.component";
import { PrintDocumentSingleLogDataComponent } from "./components/print-document-single-log-data/print-document-single-log-data.component";
import { PrintDocumentComponent } from "./components/print-document/print-document.component";
import { LogDetailComponent } from "./components/log-detail/log-detail.component";

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: "", component: HomeComponent },
        {
          path: "testDataManagement",
          component: DisplayLogTableComponent,
          children: [{ path: "logDetail", component: LogDetailComponent }]
        },
        {
          path: "print",
          outlet: "print",
          component: PrintDocumentLayoutComponent,
          children: [
            { path: "invoice", component: PrintDocumentComponent },
            {
              path: "logInvoice",
              component: PrintDocumentSingleLogDataComponent
            }
          ]
        },
        { path: "**", component: PageNotFoundComponent }
      ],
      {
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [RouterModule]
})
export class StaplesRtdmRoutingModule {}
