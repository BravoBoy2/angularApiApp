import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-response-dialog',
  standalone: true,
  imports: [],
  templateUrl: './response-dialog.component.html',
  styleUrl: './response-dialog.component.css'
})
export class ResponseDialogComponent {
constructor(public dialogRef: MatDialogRef<ResponseDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data : {title: string, message : string}) {}

onClose() : void {
  this.dialogRef.close();
}

}
