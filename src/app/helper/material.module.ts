import { NgModule } from "@angular/core";
import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatIconModule,
  MatDialogModule,
  MatMenuModule,
  MatSidenavModule,
  MatExpansionModule,
  MatListModule,
  MatCheckboxModule,
  MatSelectModule,
  MatCardModule,
  MatProgressSpinnerModule
} from "@angular/material";

@NgModule({
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}
