import { Component, OnInit, Inject } from "@angular/core";

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "staples-promo-detail",
  templateUrl: "./promo-detail.component.html",
  styleUrls: ["./promo-detail.component.scss"]
})
export class PromoDetailComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDescription: any,
    private dialogRef: MatDialogRef<PromoDetailComponent>
  ) {}

  ngOnInit() {}

  closeDialog(): void {
    this.dialogRef.close(true);
  }
}
