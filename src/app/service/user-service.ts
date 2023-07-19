  import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User, UserData } from '../model/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {

  }

  getUsers(page: number): Observable<UserData> {
    const params = new HttpParams().set('page', page.toString());

    return this.http.get<UserData>(this.apiUrl, { params });

  }
}
