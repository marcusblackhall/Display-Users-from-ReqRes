  import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NO_PER_PAGE, UserData, UserResp } from '../model/user';
import { Observable, catchError, shareReplay, throwError } from 'rxjs';
import { PreferencesService } from '../preferences.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://reqres.in/api/users';

  

  constructor(private http: HttpClient,
    private preferences:PreferencesService
    ) {

  }

  getUsers(page: number): Observable<UserData> {
     let noPerPage = NO_PER_PAGE;
     let x  =  this.preferences.getNoPerPage();
     if (x){
       noPerPage = +x;
     }     
  
    const params = new HttpParams()
    .set('page', page.toString())
    .set('per_page',noPerPage);

    return this.http.get<UserData>(this.apiUrl, { params })
    .pipe(
      shareReplay(),
      catchError(throwError)
    );
    

  }

  getUser(id: string): Observable<UserResp> {

    return this.http.get<UserResp>(this.apiUrl + "/" + id).pipe(
      shareReplay()
    );

  }
}
