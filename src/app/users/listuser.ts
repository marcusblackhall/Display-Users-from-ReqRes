import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription, mergeMap, of, switchMap, tap, toArray } from 'rxjs';
import { UserService } from '../service/user-service';
import { User, UserData } from '../model/user';

@Component({
  selector: 'app-root',
  templateUrl: './listuser.html',

})
export class ListUsers implements OnInit ,OnDestroy{

  title = 'Users';
  noPages:number = 0;
  pages:number[] = [];
  currPage: number = 0;
  users:User[] = [];
  sub!: Subscription;


  constructor( private userService:UserService ){}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {

     this.goToPage(1);

  }

  goToPrev(){
    if (this.currPage <= 1){
      return;
    }
    this.goToPage(--this.currPage);
  }

  goToNext(){

      if (this.currPage >= this.noPages) return;
      this.currPage++;
      this.goToPage(this.currPage);

  }

  goToPage(pageNo:number){

    this.currPage = pageNo;

    this.users = [];
    this.sub  =  this.userService.getUsers(this.currPage)
    .pipe(
      tap((userData:UserData) =>
      {

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


      });
  }



}
