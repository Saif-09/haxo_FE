import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email!: string;
  message!: string ;

  constructor(private http:HttpClient) { }

  signup(data:any):Observable<any>{
    return this.http.post('http://localhost:8000/api/user/register', data)
  }

  signin(data:any):Observable<any>{
    return this.http.post('http://localhost:8000/api/user/login', data)

  }

  getProfile():Observable<any>{
    const headers = {
      'Authorization':"Bearer " + localStorage.getItem('token')
    }
    return this.http.get('http://localhost:8000/api/user/loggeduser', {headers:headers});
  }

  
}
