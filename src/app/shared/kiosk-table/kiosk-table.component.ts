import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "staples-kiosk-table",
  templateUrl: "./kiosk-table.component.html",
  styleUrls: ["./kiosk-table.component.scss"]
})
export class KioskTableComponent implements OnInit {
  kioskForm = new FormGroup({
    fileName: new FormControl(""),
    customerEmail: new FormControl(""),
    customerFname: new FormControl(""),
    customerLname: new FormControl(""),
    CustomerPhoneNo: new FormControl(""),
    CustomerZipCode: new FormControl(""),
    OrderNo: new FormControl(""),
    ReservationID: new FormControl("")
  });
  constructor() {}

  get fileName() {
    return this.kioskForm.get("fileName");
  }

  get customerEmail() {
    return this.kioskForm.get("customerEmail");
  }

  get customerFname() {
    return this.kioskForm.get("customerFname");
  }

  get customerLname() {
    return this.kioskForm.get("customerLname");
  }

  get CustomerPhoneNo() {
    return this.kioskForm.get("CustomerPhoneNo");
  }

  get CustomerZipCode() {
    return this.kioskForm.get("CustomerZipCode");
  }

  get OrderNo() {
    return this.kioskForm.get("OrderNo");
  }

  get ReservationID() {
    return this.kioskForm.get("ReservationID");
  }

  ngOnInit() {}

  onSubmit() {
    console.log(JSON.stringify(this.kioskForm.value));
  }
}
