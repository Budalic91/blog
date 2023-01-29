import { createInjectableType } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { BlogCategoryItem } from 'src/app/core/models';

@Component({
  selector: 'app-add-edit-dialog',
  templateUrl: './add-edit-dialog.component.html',
  styleUrls: ['./add-edit-dialog.component.scss']
})
export class AddEditDialogComponent {
  public get headerTitle(): string {
    return this._headerTitle
  }

  public get dialogForm(): FormGroup {
    return this._dialogForm
  }

  public get categories(): BlogCategoryItem[] {
    return this._categories
  }

  private _dialogForm: FormGroup
  private _headerTitle: string
  private _categories: BlogCategoryItem[]

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddEditDialogComponent>,
    ) {
    this._headerTitle = `${data?.edit ? 'Edit' : 'Add'} blog post`
    this._categories = data.categories
    console.log(data)

    this._dialogForm = this._fb.group({
      title: new FormControl(this.data?.blog?.title || null, Validators.required),
      text: new FormControl(this.data?.blog?.text || null, Validators.required),
      category: new FormControl(this.data?.blog?.categoryId || null, Validators.required),
    })
  }

  post(form: FormGroup): void {
    console.log(form)
    this.data.blog.title = form.value.title
    this.data.blog.text = form.value.text
    this.data.blog.categoryId = +form.value.category
    this._dialogRef.close(this.data)
  }

  close(): void {
    this._dialogRef.close()
  }

}
