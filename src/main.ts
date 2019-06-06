import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { StaplesRTDMModule } from "./app/staplesRTDM.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(StaplesRTDMModule)
  .catch(err => console.log(err));
