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

  currPage!: number ;
  users:User[] = [];
  sub!: Subscription;


  constructor( private userService:UserService ){}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {

   this.currPage = 1;

  }



  goToPage(pageNo:number){



    this.users = [];
    this.sub  =  this.userService.getUsers(pageNo)
    .pipe(
      tap((userData:UserData) =>
      {
      this.noPages = userData.total_pages;
      }

      ),
      switchMap((userData:UserData) => userData.data )

      )
      .subscribe( (user:User)  => {
        this.users.push(user);


      });
  }



}
