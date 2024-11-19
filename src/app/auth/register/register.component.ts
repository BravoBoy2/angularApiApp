import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../auth.service';
import { ResponseDialogComponent } from '../../response-dialog/response-dialog.component';
import { MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule,
    MatCardModule, ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  isSubmitted = false; // will be changed when OnSubmit is called
  private formBuilder = inject(FormBuilder); //making the form
  dialog = inject(MatDialog) //injecting MatDialog that can trigger the dialog
  title? : string; // title of data object that will be massed
  message? : string;

    passwordMatchValidator : Validators = (control: AbstractControl): null => {
      const password = control.get('password');
      const passwordConfirmation = control.get('password_confirmation');
      if(password && passwordConfirmation && password.value != passwordConfirmation.value){
        passwordConfirmation.setErrors({notSame: true});
      }

      return null;
    }

 registerForm = this.formBuilder.group({
   name: ['', Validators.required],
   email: ['', [Validators.required, Validators.email]],
   password: ['', [Validators.required, Validators.minLength(8)]],
   password_confirmation: ['', Validators.required]
 }, {validators : this.passwordMatchValidator})
  // protected serverErrorMessage: string;





  constructor( private authService: AuthService) {}




  onSubmit(){
     this.isSubmitted = true;

    if(this.registerForm.valid){

      this.authService.fetchData('register', this.registerForm.value).subscribe({
        next: (response: any) => {
          console.log(response);
          this.dialog.open(ResponseDialogComponent, {
            data: {
              title: 'Success',
              message : 'Registration Successful'
            }
          });

          this.registerForm.reset();

        },
        error: (error : any) => {
          // console.log('Registration failed', error);
          this.openDialog('Registration Failed', error.error.message);
        }
      })
    }

  }

  openDialog(title : string, message : string) {
  this.dialog.open( ResponseDialogComponent,{
    data: {
      title: title,
       message : message

     }
  });
}

hasDisplableError(ControlName : string) : boolean {
  const control = this.registerForm.get(ControlName);
  return Boolean(control?.invalid) && (this.isSubmitted || Boolean(control?.touched))
}


  }




