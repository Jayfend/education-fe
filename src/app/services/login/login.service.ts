import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
   // Điều chỉnh URL tương ứng
  apiUrl = 'https://localhost:7230';
  constructor(private http: HttpClient) {}

  getToken(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', username);
    body.set('password', password);
    body.set('scope','openid profile edu');
    body.set('client_id','education');
    body.set('client_secret',"edu123")

    return this.http.post(this.apiUrl+"/connect/token", body.toString(), { headers });
  }
  getUserInfo():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': "Bearer " +localStorage.getItem("access_token"),
    });
    return this.http.get(this.apiUrl+"/connect/userinfo",{headers});
  }
}
