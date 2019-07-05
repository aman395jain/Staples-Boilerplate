import { NgModule } from "@angular/core";
import { RouterModule, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { DisplayLogTableComponent } from "./components/dashboard-log-table/dashboard-log-table.component";
import { PrintDocumentLayoutComponent } from "./shared/print-document-layout/print-document-layout.component";
import { PrintDocumentSingleLogDataComponent } from "./components/print-document-single-log-data/print-document-single-log-data.component";
import { PrintDocumentComponent } from "./components/print-document/print-document.component";
import { LogDetailComponent } from "./components/log-detail/log-detail.component";
import { LogDetailGuard } from "./guards/log-detail/log-detail-guard.guard";
import { KioskTableComponent } from "./shared/kiosk-table/kiosk-table.component";
import { SolutionBuilderOrderComponent } from "./shared/solution-builder-order/solution-builder-order.component";
import { SkuListComponent } from "./shared/sku-list/sku-list.component";

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: "", component: HomeComponent },
        {
          path: "testDataManagement",
          component: DisplayLogTableComponent,
          children: [
            {
              path: "logDetail",
              component: LogDetailComponent,
              canActivate: [LogDetailGuard]
            },
            {
              path: "logDetail/sku-List",
              component: SkuListComponent
            },
            {
              path: "new-kiosk-order",
              component: KioskTableComponent
            },
            {
              path: "new-solution-builder-order",
              component: SolutionBuilderOrderComponent
            }
          ]
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
        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled",
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [RouterModule]
})
export class StaplesRtdmRoutingModule {}
