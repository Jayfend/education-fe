import { Injectable } from '@angular/core';
import { UserCreateModel } from 'src/models/register/createusermodel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl = 'https://localhost:7070';
  constructor(private http: HttpClient) { }
registerUser(user: UserCreateModel): Observable<any> {
  return this.http.post<boolean>(`${this.apiUrl}/api/user`, user);
}
}
