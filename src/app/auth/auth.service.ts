import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

 export interface AuthResponse {
  errors?: any;
  token?: string;
  user?: any;
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  constructor(private http: HttpClient){}
  fetchData(apiRoute: string, formData : any) : Observable<any> {
    const url = `/api/${apiRoute}`
    return this.http.post(url, formData);
  }
}
  
