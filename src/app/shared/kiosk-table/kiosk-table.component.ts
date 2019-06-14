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

  selectedFileName = "";

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

  get itemDesc5digit1() {
    return this.kioskForm.get("itemDesc5digit1");
  }

  get itemID5digit1() {
    return this.kioskForm.get("itemID5digit1");
  }

  get itemDesc5digit2() {
    return this.kioskForm.get("itemDesc5digit2");
  }

  get itemID5digit2() {
    return this.kioskForm.get("itemID5digit2");
  }

  get itemDesc5digit3() {
    return this.kioskForm.get("itemDesc5digit3");
  }

  get itemID5digit3() {
    return this.kioskForm.get("itemID5digit3");
  }

  get itemDesc5digit4() {
    return this.kioskForm.get("itemDesc5digit4");
  }

  get itemID5digit4() {
    return this.kioskForm.get("itemID5digit4");
  }

  get itemDesc16DigitCoupon1() {
    return this.kioskForm.get("itemDesc16DigitCoupon1");
  }

  get itemID16DigitCoupon1() {
    return this.kioskForm.get("itemID16DigitCoupon1");
  }

  get itemDesc16DigitCoupon2() {
    return this.kioskForm.get("itemDesc16DigitCoupon2");
  }

  get itemID16DigitCoupon2() {
    return this.kioskForm.get("itemID16DigitCoupon2");
  }

  get itemDescRewardNo1() {
    return this.kioskForm.get("itemDescRewardNo1");
  }

  get itemIDRewardNo1() {
    return this.kioskForm.get("itemIDRewardNo1");
  }

  get itemDescRewardNo2() {
    return this.kioskForm.get("itemDescRewardNo2");
  }

  get itemIDRewardNo2() {
    return this.kioskForm.get("itemIDRewardNo2");
  }

  get itemDescIngram() {
    return this.kioskForm.get("itemDescIngram");
  }

  get itemIDIngram() {
    return this.kioskForm.get("itemIDIngram");
  }

  get itemDescSku() {
    return this.kioskForm.get("itemDescSku");
  }

  get itemIDSku() {
    return this.kioskForm.get("itemIDSku");
  }

  get itemDescARWRN1() {
    return this.kioskForm.get("itemDescARWRN1");
  }

  get itemIDARWRN1() {
    return this.kioskForm.get("itemIDARWRN1");
  }

  get itemIDARWRN2() {
    return this.kioskForm.get("itemIDARWRN2");
  }

  get itemDescARWRN3() {
    return this.kioskForm.get("itemDescARWRN3");
  }

  get itemIDARWRN3() {
    return this.kioskForm.get("itemIDARWRN3");
  }

  get itemDescARWRN4() {
    return this.kioskForm.get("itemDescARWRN4");
  }

  get itemIDARWRN4() {
    return this.kioskForm.get("itemIDARWRN4");
  }

  ngOnInit() {}

  onChange(fileValue) {
    this.selectedFileName = fileValue;
    if (fileValue === "Prepaid Kiosk Order with 5 digit coupons") {
      this.kioskForm.addControl("itemDesc5digit1", new FormControl(""));
      this.kioskForm.addControl("itemID5digit1", new FormControl(""));
      this.kioskForm.addControl("itemDesc5digit2", new FormControl(""));
      this.kioskForm.addControl("itemID5digit2", new FormControl(""));
      this.kioskForm.addControl("itemDesc5digit3", new FormControl(""));
      this.kioskForm.addControl("itemID5digit3", new FormControl(""));
      this.kioskForm.addControl("itemDesc5digit4", new FormControl(""));
      this.kioskForm.addControl("itemID5digit4", new FormControl(""));
    } else if (fileValue === "Prepaid Kiosk Order with 16 digit coupons") {
      this.kioskForm.addControl("itemDesc16DigitCoupon1", new FormControl(""));
      this.kioskForm.addControl("itemID16DigitCoupon1", new FormControl(""));
      this.kioskForm.addControl("itemDesc16DigitCoupon2", new FormControl(""));
      this.kioskForm.addControl("itemID16DigitCoupon2", new FormControl(""));
    } else if (fileValue === "Prepaid Kiosk Order with ARW rewards number") {
      this.kioskForm.addControl("itemDescARWRN1", new FormControl(""));
      this.kioskForm.addControl("itemIDARWRN1", new FormControl(""));
      this.kioskForm.addControl("itemDescARWRN2", new FormControl(""));
      this.kioskForm.addControl("itemIDARWRN2", new FormControl(""));
      this.kioskForm.addControl("itemDescARWRN3", new FormControl(""));
      this.kioskForm.addControl("itemIDARWRN3", new FormControl(""));
      this.kioskForm.addControl("itemDescARWRN4", new FormControl(""));
      this.kioskForm.addControl("itemIDARWRN4", new FormControl(""));
    } else if (fileValue === "Prepaid Kiosk Order with Ingram") {
      this.kioskForm.addControl("itemDescIngram", new FormControl(""));
      this.kioskForm.addControl("itemIDIngram", new FormControl(""));
    } else if (fileValue === "Prepaid Kiosk Order with rewards number") {
      this.kioskForm.addControl("itemDescRewardNo1", new FormControl(""));
      this.kioskForm.addControl("itemIDRewardNo1", new FormControl(""));
      this.kioskForm.addControl("itemDescRewardNo2", new FormControl(""));
      this.kioskForm.addControl("itemIDRewardNo2", new FormControl(""));
    } else if (fileValue === "Prepaid Kiosk Order with United SKU") {
      this.kioskForm.addControl("itemDescSku", new FormControl(""));
      this.kioskForm.addControl("itemIDSku", new FormControl(""));
    }
  }

  onSubmit() {
    console.log(JSON.stringify(this.kioskForm.value));
  }
}
