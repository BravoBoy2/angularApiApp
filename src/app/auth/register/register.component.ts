import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../auth.service';
import { HttpResponse } from '@angular/common/http';
import { ResponseDialogComponent } from '../../response-dialog/response-dialog.component';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatCardModule, ReactiveFormsModule, ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
   
  
  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private dialog: MatDialog) 
   {
    

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required]]
    }, {Validators : this.passwordMatchValidator});

    
  }
  
  passwordMatchValidator(g : FormGroup) {
    return g.get('password')?.value === g.get('Password_confirmation')?.value? null : { notSame: true };
  }

  onSubmit(){
    if(this.registerForm.valid){
      this.authService.fetchData('register', this.registerForm.value).subscribe({
        next: (response: HttpResponse<any>) => {
          this.showDialog('success', 'Registration Successful');
          console.log(response);
          this.registerForm.reset();
        },
        error: (error: any) => {
          console.log('Registration failed', error);
          this.showDialog('Registration Failed', error.error);
        }
      })
    }
  }

  showDialog(title: string, message: string) {
  this.dialog.open(ResponseDialogComponent, {
    data: {
      title: title,
       message : message 
     }
  });
}


  }




