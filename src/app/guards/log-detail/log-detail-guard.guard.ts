import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from "@angular/router";
import { Observable } from "rxjs";

import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";

@Injectable({
  providedIn: "root"
})
export class LogDetailGuard implements CanActivate {
  constructor(
    private _logModalDataService: LogModalDataService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this._logModalDataService.setLogDetailData().subscribe(row => {
      if (row === null) {
        this.router.navigate(["/testDataManagement"]);
        return false;
      }
    });
    return true;
  }
}
