import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import { NavBarService } from "src/app/services/nav-bar/nav-bar.service";
import { LogModalDataService } from "src/app/services/log-modal-data/log-modal-data.service";
import { KioskOrderService } from "src/app/services/kiosk-order/kiosk-order.service";

/**
 * @component KioskTableComponent
 * To attain the functionality for Dynamic Kiosk order form.
 */
@Component({
  selector: "staples-kiosk-table",
  templateUrl: "./kiosk-table.component.html",
  styleUrls: ["./kiosk-table.component.scss"]
})
export class KioskTableComponent implements OnInit {
  kioskForm = new FormGroup({
    fileName: new FormControl(""),
    customerEMailID: new FormControl(""),
    customerFirstName: new FormControl(""),
    customerLastName: new FormControl(""),
    CustomerPhoneNo: new FormControl(""),
    CustomerZipCode: new FormControl(""),
    customerZipCode: new FormControl(""),
    ReservationID: new FormControl("")
  });

  kioskFileOptions = [];
  selectedFileName = "";
  kioskCustomerData = {};

  constructor(
    private _kioskOrderService: KioskOrderService,
    private router: Router,
    private _navBarService: NavBarService,
    private _logModalDataService: LogModalDataService
  ) {}

  ngOnInit() {
    this.kioskFileOptions = [
      "Prepaid Kiosk Order with 5 digit coupons",
      "Prepaid Kiosk Order with 16 digit coupons",
      "Prepaid Kiosk Order with ARW rewards number",
      "Prepaid Kiosk Order with Ingram",
      "Prepaid Kiosk Order with rewards number",
      "Prepaid Kiosk Order with United SKU"
    ];

    this._kioskOrderService.getDataForKioskForm("").subscribe(data => {
      this.kioskCustomerData = data;
    });
  }

  onChange(fileValue: string) {
    this.selectedFileName = fileValue;
    if (fileValue === "Prepaid Kiosk Order with 5 digit coupons") {
      this._kioskOrderService.getDataForKioskForm(fileValue).subscribe(data => {
        this.kioskForm.controls["customerEMailID"].setValue(
          data["customerEMailID"]
        );
        this.kioskForm.controls["customerFirstName"].setValue(
          data["customerFirstName"]
        );
        this.kioskForm.controls["customerLastName"].setValue(
          data["customerLastName"]
        );
        this.kioskForm.controls["CustomerPhoneNo"].setValue(
          data["customerPhoneNo"]
        );
        this.kioskForm.controls["customerZipCode"].setValue(
          data["customerZipCode"]
        );
        this.kioskForm.controls["itemDesc5digit1"].setValue(
          data["itemDesc5digit1"]
        );
        this.kioskForm.controls["itemID5digit1"].setValue(
          data["itemID5digit1"]
        );
        this.kioskForm.controls["itemDesc5digit2"].setValue(
          data["itemDesc5digit2"]
        );
        this.kioskForm.controls["itemDesc5digit3"].setValue(
          data["itemDesc5digit3"]
        );
        this.kioskForm.controls["itemDesc5digit4"].setValue(
          data["itemDesc5digit4"]
        );
        this.kioskForm.controls["itemID5digit2"].setValue(
          data["itemID5digit2"]
        );
        this.kioskForm.controls["itemID5digit3"].setValue(
          data["itemID5digit3"]
        );
        this.kioskForm.controls["itemID5digit4"].setValue(
          data["itemID5digit4"]
        );
        this.kioskForm.controls["unitPrice5digit1"].setValue(
          data["unitPrice5digit1"]
        );
        this.kioskForm.controls["unitPrice5digit2"].setValue(
          data["unitPrice5digit2"]
        );
        this.kioskForm.controls["unitPrice5digit3"].setValue(
          data["unitPrice5digit3"]
        );
        this.kioskForm.controls["unitPrice5digit4"].setValue(
          data["unitPrice5digit4"]
        );
      });
      this.kioskForm.addControl("itemDesc5digit1", new FormControl(""));
      this.kioskForm.addControl("itemID5digit1", new FormControl(""));
      this.kioskForm.addControl("unitPrice5digit1", new FormControl(""));
      this.kioskForm.addControl("itemDesc5digit2", new FormControl(""));
      this.kioskForm.addControl("itemID5digit2", new FormControl(""));
      this.kioskForm.addControl("unitPrice5digit2", new FormControl(""));
      this.kioskForm.addControl("itemDesc5digit3", new FormControl(""));
      this.kioskForm.addControl("itemID5digit3", new FormControl(""));
      this.kioskForm.addControl("unitPrice5digit3", new FormControl(""));
      this.kioskForm.addControl("itemDesc5digit4", new FormControl(""));
      this.kioskForm.addControl("itemID5digit4", new FormControl(""));
      this.kioskForm.addControl("unitPrice5digit4", new FormControl(""));
    } else if (fileValue === "Prepaid Kiosk Order with 16 digit coupons") {
      this.kioskForm.addControl("itemDesc16DigitCoupon1", new FormControl(""));
      this.kioskForm.addControl("itemID16DigitCoupon1", new FormControl(""));
      this.kioskForm.addControl("itemDesc16DigitCoupon2", new FormControl(""));
      this.kioskForm.addControl("itemID16DigitCoupon2", new FormControl(""));
      this.kioskForm.addControl("unitPrice16DigitCoupon1", new FormControl(""));
      this.kioskForm.addControl("unitPrice16DigitCoupon2", new FormControl(""));

      this._kioskOrderService.getDataForKioskForm(fileValue).subscribe(data => {
        this.kioskForm.controls["customerEMailID"].setValue(
          data["customerEMailID"]
        );
        this.kioskForm.controls["customerFirstName"].setValue(
          data["customerFirstName"]
        );
        this.kioskForm.controls["customerLastName"].setValue(
          data["customerLastName"]
        );
        this.kioskForm.controls["CustomerPhoneNo"].setValue(
          data["customerPhoneNo"]
        );
        this.kioskForm.controls["customerZipCode"].setValue(
          data["customerZipCode"]
        );
        this.kioskForm.controls["itemDesc16DigitCoupon1"].setValue(
          data["itemDesc16DigitCoupon1"]
        );
        this.kioskForm.controls["itemID16DigitCoupon1"].setValue(
          data["itemID16DigitCoupon1"]
        );
        this.kioskForm.controls["itemDesc16DigitCoupon2"].setValue(
          data["itemDesc16DigitCoupon2"]
        );
        this.kioskForm.controls["itemID16DigitCoupon2"].setValue(
          data["itemID16DigitCoupon2"]
        );
        this.kioskForm.controls["unitPrice16DigitCoupon1"].setValue(
          data["unitPrice16DigitCoupon1"]
        );
        this.kioskForm.controls["unitPrice16DigitCoupon2"].setValue(
          data["unitPrice16DigitCoupon2"]
        );
      });
    } else if (fileValue === "Prepaid Kiosk Order with ARW rewards number") {
      this.kioskForm.addControl("itemDescARWRN1", new FormControl(""));
      this.kioskForm.addControl("itemIDARWRN1", new FormControl(""));
      this.kioskForm.addControl("itemDescARWRN2", new FormControl(""));
      this.kioskForm.addControl("itemIDARWRN2", new FormControl(""));
      this.kioskForm.addControl("itemDescARWRN3", new FormControl(""));
      this.kioskForm.addControl("itemIDARWRN3", new FormControl(""));
      this.kioskForm.addControl("itemDescARWRN4", new FormControl(""));
      this.kioskForm.addControl("itemIDARWRN4", new FormControl(""));
      this.kioskForm.addControl("unitPriceARWRN1", new FormControl(""));
      this.kioskForm.addControl("unitPriceARWRN2", new FormControl(""));
      this.kioskForm.addControl("unitPriceARWRN3", new FormControl(""));
      this.kioskForm.addControl("unitPriceARWRN4", new FormControl(""));
      this._kioskOrderService.getDataForKioskForm(fileValue).subscribe(data => {
        this.kioskForm.controls["customerEMailID"].setValue(
          data["customerEMailID"]
        );
        this.kioskForm.controls["customerFirstName"].setValue(
          data["customerFirstName"]
        );
        this.kioskForm.controls["customerLastName"].setValue(
          data["customerLastName"]
        );
        this.kioskForm.controls["CustomerPhoneNo"].setValue(
          data["customerPhoneNo"]
        );
        this.kioskForm.controls["customerZipCode"].setValue(
          data["customerZipCode"]
        );
        this.kioskForm.controls["itemDescARWRN1"].setValue(
          data["itemDescARWRN1"]
        );
        this.kioskForm.controls["itemIDARWRN1"].setValue(data["itemIDARWRN1"]);
        this.kioskForm.controls["itemDescARWRN2"].setValue(
          data["itemDescARWRN2"]
        );
        this.kioskForm.controls["itemIDARWRN2"].setValue(data["itemIDARWRN2"]);
        this.kioskForm.controls["itemDescARWRN3"].setValue(
          data["itemDescARWRN3"]
        );
        this.kioskForm.controls["itemIDARWRN3"].setValue(data["itemIDARWRN3"]);
        this.kioskForm.controls["itemDescARWRN4"].setValue(
          data["itemDescARWRN4"]
        );
        this.kioskForm.controls["itemIDARWRN4"].setValue(data["itemIDARWRN4"]);
        this.kioskForm.controls["unitPriceARWRN1"].setValue(
          data["unitPriceARWRN1"]
        );
        this.kioskForm.controls["unitPriceARWRN2"].setValue(
          data["unitPriceARWRN2"]
        );
        this.kioskForm.controls["unitPriceARWRN3"].setValue(
          data["unitPriceARWRN3"]
        );
        this.kioskForm.controls["unitPriceARWRN4"].setValue(
          data["unitPriceARWRN4"]
        );
      });
    } else if (fileValue === "Prepaid Kiosk Order with Ingram") {
      this.kioskForm.addControl("itemDescIngram", new FormControl(""));
      this.kioskForm.addControl("itemIDIngram", new FormControl(""));
      this.kioskForm.addControl("unitPriceIngram", new FormControl(""));
      this._kioskOrderService.getDataForKioskForm(fileValue).subscribe(data => {
        this.kioskForm.controls["customerEMailID"].setValue(
          data["customerEMailID"]
        );
        this.kioskForm.controls["customerFirstName"].setValue(
          data["customerFirstName"]
        );
        this.kioskForm.controls["customerLastName"].setValue(
          data["customerLastName"]
        );
        this.kioskForm.controls["CustomerPhoneNo"].setValue(
          data["customerPhoneNo"]
        );
        this.kioskForm.controls["customerZipCode"].setValue(
          data["customerZipCode"]
        );
        this.kioskForm.controls["itemDescIngram"].setValue(
          data["itemDescIngram"]
        );
        this.kioskForm.controls["itemIDIngram"].setValue(data["itemIDIngram"]);
        this.kioskForm.controls["unitPriceIngram"].setValue(
          data["unitPriceIngram"]
        );
      });
    } else if (fileValue === "Prepaid Kiosk Order with rewards number") {
      this.kioskForm.addControl("itemDescRewardNo1", new FormControl(""));
      this.kioskForm.addControl("itemIDRewardNo1", new FormControl(""));
      this.kioskForm.addControl("itemDescRewardNo2", new FormControl(""));
      this.kioskForm.addControl("itemIDRewardNo2", new FormControl(""));
      this.kioskForm.addControl("unitPriceRewardNo1", new FormControl(""));
      this.kioskForm.addControl("unitPriceRewardNo2", new FormControl(""));
      this._kioskOrderService.getDataForKioskForm(fileValue).subscribe(data => {
        this.kioskForm.controls["customerEMailID"].setValue(
          data["customerEMailID"]
        );
        this.kioskForm.controls["customerFirstName"].setValue(
          data["customerFirstName"]
        );
        this.kioskForm.controls["customerLastName"].setValue(
          data["customerLastName"]
        );
        this.kioskForm.controls["CustomerPhoneNo"].setValue(
          data["customerPhoneNo"]
        );
        this.kioskForm.controls["customerZipCode"].setValue(
          data["customerZipCode"]
        );
        this.kioskForm.controls["itemDescRewardNo1"].setValue(
          data["itemDescRewardNo1"]
        );
        this.kioskForm.controls["itemIDRewardNo1"].setValue(
          data["itemIDRewardNo1"]
        );
        this.kioskForm.controls["itemDescRewardNo2"].setValue(
          data["itemDescRewardNo2"]
        );
        this.kioskForm.controls["itemIDRewardNo2"].setValue(
          data["itemIDRewardNo2"]
        );
        this.kioskForm.controls["unitPriceRewardNo1"].setValue(
          data["unitPriceRewardNo1"]
        );
        this.kioskForm.controls["unitPriceRewardNo2"].setValue(
          data["unitPriceRewardNo2"]
        );
      });
    } else if (fileValue === "Prepaid Kiosk Order with United SKU") {
      this.kioskForm.addControl("itemDescSku", new FormControl(""));
      this.kioskForm.addControl("itemIDSku", new FormControl(""));
      this.kioskForm.addControl("unitPriceSku", new FormControl(""));
      this._kioskOrderService.getDataForKioskForm(fileValue).subscribe(data => {
        this.kioskForm.controls["customerEMailID"].setValue(
          data["customerEMailID"]
        );
        this.kioskForm.controls["customerFirstName"].setValue(
          data["customerFirstName"]
        );
        this.kioskForm.controls["customerLastName"].setValue(
          data["customerLastName"]
        );
        this.kioskForm.controls["CustomerPhoneNo"].setValue(
          data["customerPhoneNo"]
        );
        this.kioskForm.controls["customerZipCode"].setValue(
          data["customerZipCode"]
        );
        this.kioskForm.controls["itemDescSku"].setValue(data["itemDescSku"]);
        this.kioskForm.controls["itemIDSku"].setValue(data["itemIDSku"]);
        this.kioskForm.controls["unitPriceSku"].setValue(data["unitPriceSku"]);
      });
    }
  }

  onSubmit() {
    this._kioskOrderService
      .postDataForKioskOrder(JSON.stringify(this.kioskForm.value))
      .subscribe(() => {
        console.log("works");
      });
  }

  backToOrderDataTable() {
    this._logModalDataService.getKioskOrderFlag(false);
    this._navBarService.getAdvanceSearchStatus(false);
    const backToTable = {
      tableName: "Order",
      initialIndex: 1,
      spinnerFlag: true,
      spinnerForPagination: false
    };
    this._navBarService.setElementNameFromSideBar(backToTable);
    this.router.navigate(["/testDataManagement"]);
  }

  clearKioskForm() {
    this.selectedFileName = "";
    this.kioskForm.controls["fileName"].setValue("");
    this.kioskForm.controls["customerEMailID"].setValue("");
    this.kioskForm.controls["customerFirstName"].setValue("");
    this.kioskForm.controls["customerLastName"].setValue("");
    this.kioskForm.controls["CustomerPhoneNo"].setValue("");
    this.kioskForm.controls["customerZipCode"].setValue("");
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
