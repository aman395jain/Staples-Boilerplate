import { Component, OnInit } from "@angular/core";
import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isMenuOpen = true;
  constructor(private navBarService: NavBarService) {}

  ngOnInit() {}

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log("On toolbar toggled", this.isMenuOpen);
    this.navBarService.setToggleStatus(this.isMenuOpen);

    // if(!this.isMenuOpen) {
    //   this.contentMargin = 70;
    // } else {
    //   this.contentMargin = 240;
    // }
  }
}
