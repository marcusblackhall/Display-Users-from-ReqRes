import { Component, OnInit } from '@angular/core';
import {  mergeMap, of, switchMap, tap, toArray } from 'rxjs';
import { UserService } from '../service/user-service';
import { User, UserData } from '../model/user';

@Component({
  selector: 'app-root',
  templateUrl: './listuser.html',
  
})
export class ListUsers implements OnInit {

  title = 'Users';
  noPages:number = 0;
  pages:number[] = [];
  currPage: number = 0;
  users:User[] = [];


  constructor( private userService:UserService ){}
  ngOnInit(): void {

     this.goToPage(1);



  }

  goToNext(){
      if (this.currPage >= this.noPages) return;
      this.goToPage(this.currPage + 1);

  }

  goToPage(pageNo:number){



    this.currPage = pageNo;
    this.users = [];
    this.userService.getUsers(pageNo)
    .pipe(
      tap((userData:UserData) =>
      {
      console.log("No. of pages " + userData.total_pages);
      this.noPages = userData.total_pages;
      for (let i=0;i< userData.total_pages;i++){
          this.pages[i] = i+1;
      }
      }

      ),
      switchMap((userData:UserData) => userData.data )

      )
      .subscribe( (user:User)  => {
        this.users.push(user);
        console.log(user)});
  }



}
