import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddEditDialogComponent } from './components/add-edit-dialog/add-edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddEditDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  entryComponents: [AddEditDialogComponent],
  exports:[AddEditDialogComponent],
})
export class SharedModule { }
