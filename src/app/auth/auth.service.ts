import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

 export interface AuthResponse {
  errors?: any;
  token?: string;
  user?: any;
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private apiURL = "/api";
  private userSubject: BehaviorSubject<any>; 
  public user: Observable<any>; 
  private errorsSubject: BehaviorSubject<any>; 
  public errors: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<any>(null);
    this.user = this.userSubject.asObservable();
    this.errorsSubject = new BehaviorSubject<any>({});
    this.errors = this.errorsSubject.asObservable();
  }


  getUser(): void { 
    const token = localStorage.getItem('token'); 
    if (token) { const headers = new HttpHeaders()
      .set('authorization', `Bearer ${token}`); 
    this.http.get(`${this.apiURL}/user`, 
      { headers })
      .subscribe( 
        data => { 
            this.userSubject.next(data); }, 
            error => { 
                console.error('Error fetching user data', error); 
              } 
              ); 
            } 
          }

  authenticate(apiRoute: string, formData: any): Observable<AuthResponse> { 
    return this.http.post(`${this.apiURL}/${apiRoute}`, formData)
    .pipe( 
      tap(data => { 
          if (data.errors) 
            { this.errorsSubject.next(data.errors); 

            } else {
             this.errorsSubject.next({}); 
             if(data.token){
            localStorage.setItem('token', data.token); 
             }
            this.userSubject.next(data.user); 
            this.router.navigate(['home']); 
          } }) 
        ); 
      }

      logout(): void { 
        const token = localStorage.getItem('token'); 
        if (token) { 
          const headers = new HttpHeaders()
          .set('authorization', `Bearer ${token}`); 
          this.http.post(`${this.apiURL}/logout`, {}, { headers }).
          subscribe( data => { 
            console.log(data); 
            this.userSubject.next(null); 
            this.errorsSubject.next({}); 
            localStorage.removeItem('token'); 
            this.router.navigate(['home']); }, 
            error => { 
              console.error('Error logging out', error);
             }
             );
             }
    }
  }

