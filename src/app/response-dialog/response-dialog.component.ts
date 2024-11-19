import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog'

@Component({
  selector: 'app-response-dialog',
  standalone: true,
  imports: [MatDialogContent, MatButtonModule, MatDialogClose, MatDialogActions, MatDialogTitle],
  templateUrl: './response-dialog.component.html',
  styleUrl: './response-dialog.component.css'
})
export class ResponseDialogComponent {
  data = inject(MAT_DIALOG_DATA);

}