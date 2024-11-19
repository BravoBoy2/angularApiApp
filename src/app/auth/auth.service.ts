import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

 export interface AuthResponse {
  errors?: any;
  token?: string;
  user?: null;
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  constructor(private http: HttpClient){}
  fetchData(apiRoute: string, formData : any) : Observable<any>{
    const url = `/api/${apiRoute}`
    return this.http.post(url, formData);
}

}

// if(this.registerForm.valid){
//       this.authService.fetchData('register', this.registerForm.value).subscribe({
//         next: (response: HttpResponse<any>) => {
//           this.showDialog('success', 'Registration Successful');
//           console.log(response);
//           this.registerForm.reset();
//         },
//         error: (error: any) => {
//           console.log('Registration failed', error);
//           this.showDialog('Registration Failed', error.error);
//         }
//       })
//     }
//   }
