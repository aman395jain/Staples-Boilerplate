import { Component, OnInit } from "@angular/core";
import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  constructor(private _navBarService: NavBarService) {}

  ngOnInit() {}

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    this._navBarService.setToggleStatus(this.isMenuOpen);
  }
}
