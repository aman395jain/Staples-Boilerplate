import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import { LoglistingService } from "src/app/services/log-listing/loglisting.service";
import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";
import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";
import { HttpClient } from "@angular/common/http";

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

  kioskFileOptions = [];
  selectedFileName = "";
  kioskCustomerData = {};

  constructor(
    private _loglistingService: LoglistingService,
    private router: Router,
    private _navBarService: NavBarService,
    private _logModalDataService: LogModalDataService
  ) {}

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

  ngOnInit() {
    this.kioskFileOptions = [
      "Prepaid Kiosk Order with 5 digit coupons",
      "Prepaid Kiosk Order with 16 digit coupons",
      "Prepaid Kiosk Order with ARW rewards number",
      "Prepaid Kiosk Order with Ingram",
      "Prepaid Kiosk Order with rewards number",
      "Prepaid Kiosk Order with United SKU"
    ];
    this._loglistingService.getDataForKioskForm().subscribe(data => {
      this.kioskCustomerData = data;
    });
  }

  onChange(fileValue: string) {
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

      if (
        this.kioskCustomerData &&
        this.kioskCustomerData.hasOwnProperty("customerEMailID") &&
        this.kioskCustomerData.hasOwnProperty("customerFirstName") &&
        this.kioskCustomerData.hasOwnProperty("customerLastName") &&
        this.kioskCustomerData.hasOwnProperty("customerPhoneNo") &&
        this.kioskCustomerData.hasOwnProperty("customerZipCode") &&
        this.kioskCustomerData.hasOwnProperty("itemDesc5digit1") &&
        this.kioskCustomerData.hasOwnProperty("itemDesc5digit2") &&
        this.kioskCustomerData.hasOwnProperty("itemDesc5digit3") &&
        this.kioskCustomerData.hasOwnProperty("itemDesc5digit4") &&
        this.kioskCustomerData.hasOwnProperty("itemID5digit1") &&
        this.kioskCustomerData.hasOwnProperty("itemID5digit2") &&
        this.kioskCustomerData.hasOwnProperty("itemID5digit3") &&
        this.kioskCustomerData.hasOwnProperty("itemID5digit4")
      ) {
        this.kioskForm.controls["customerEmail"].setValue(
          this.kioskCustomerData["customerEMailID"]
        );
        this.kioskForm.controls["customerFname"].setValue(
          this.kioskCustomerData["customerFirstName"]
        );
        this.kioskForm.controls["customerLname"].setValue(
          this.kioskCustomerData["customerLastName"]
        );
        this.kioskForm.controls["CustomerPhoneNo"].setValue(
          this.kioskCustomerData["customerPhoneNo"]
        );
        this.kioskForm.controls["OrderNo"].setValue(
          this.kioskCustomerData["customerZipCode"]
        );
        this.kioskForm.controls["itemDesc5digit1"].setValue(
          this.kioskCustomerData["itemDesc5digit1"]
        );
        this.kioskForm.controls["itemID5digit1"].setValue(
          this.kioskCustomerData["itemID5digit1"]
        );
        this.kioskForm.controls["itemDesc5digit2"].setValue(
          this.kioskCustomerData["itemDesc5digit2"]
        );
        this.kioskForm.controls["itemDesc5digit3"].setValue(
          this.kioskCustomerData["itemDesc5digit3"]
        );
        this.kioskForm.controls["itemDesc5digit4"].setValue(
          this.kioskCustomerData["itemDesc5digit4"]
        );
        this.kioskForm.controls["itemID5digit2"].setValue(
          this.kioskCustomerData["itemID5digit2"]
        );
        this.kioskForm.controls["itemID5digit3"].setValue(
          this.kioskCustomerData["itemID5digit3"]
        );
        this.kioskForm.controls["itemID5digit4"].setValue(
          this.kioskCustomerData["itemID5digit4"]
        );
      }
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
    this._loglistingService.postDataForKioskOrder(
      JSON.stringify(this.kioskForm.value)
    );
  }

  backToOrderDataTable() {
    this._logModalDataService.getLogDetailFlag(false);
    this._logModalDataService.getKioskOrderFlag(false);
    this._navBarService.getAdvanceSearchStatus(false);
    this._navBarService.setElementNameFromSideBar("Order");
    this.router.navigate(["/testDataManagement"]);
  }

  clearKioskForm() {
    this.selectedFileName = "";
    this.kioskForm.controls["fileName"].setValue("");
    this.kioskForm.controls["customerEmail"].setValue("");
    this.kioskForm.controls["customerFname"].setValue("");
    this.kioskForm.controls["customerLname"].setValue("");
    this.kioskForm.controls["CustomerPhoneNo"].setValue("");
    this.kioskForm.controls["OrderNo"].setValue("");
    this.kioskForm.controls["itemDesc5digit1"].setValue("");
    this.kioskForm.controls["itemID5digit1"].setValue("");
    this.kioskForm.controls["itemDesc5digit2"].setValue("");
    this.kioskForm.controls["itemDesc5digit3"].setValue("");
    this.kioskForm.controls["itemDesc5digit4"].setValue("");
    this.kioskForm.controls["itemID5digit2"].setValue("");
    this.kioskForm.controls["itemID5digit3"].setValue("");
    this.kioskForm.controls["itemID5digit4"].setValue("");
  }
}
