import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map, mergeMap, of, switchMap, tap, toArray } from 'rxjs';
import { UserService } from '../service/user-service';
import { User, UserData } from '../model/user';
import { PreferencesService } from '../preferences.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './listuser.html',

})
export class ListUsers implements OnInit {
  changeNoPerPage(event: Event) {

    console.log(this.noPerPage.value);
    if (!isNaN(this.noPerPage.value)) {
      
      this.preferences.setNoPerPage(this.noPerPage.value);
    }
  }

  title = 'Users';
  noPages: number = 0;

  users$ :Observable<User[]> = of([]);
  

  noPerPage: FormControl = new FormControl('');


  constructor(private userService: UserService,
    private preferences: PreferencesService

  ) { }
  ngOnInit(): void {
    this.noPerPage.setValue(this.preferences.getNoPerPage());

  }
 


  goToPage(pageNo: number) {

    
    this.users$ = this.userService.getUsers(pageNo)
      .pipe(
        tap((userData: UserData) => {
          this.noPages = userData.total_pages;
        }),
        map((userData:UserData) => userData.data)
        
        );
     
  }



}
