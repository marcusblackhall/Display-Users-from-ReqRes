import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of, switchMap, tap } from 'rxjs';
import { UserService } from '../service/user-service';
import { User, UserResp } from '../model/user';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  user = {} as User;

  constructor(private route:ActivatedRoute, private userService:UserService ) { }

  ngOnInit(): void {

   this.route.paramMap.pipe(
      tap( (parms:ParamMap) =>console.log(parms)),
      switchMap( (parms:ParamMap) =>  {

        let parmId =  parms.get('id');
       return  this.getUserForId(parmId)
      })


   ).subscribe((userResp:UserResp) => {this.user = userResp.data;} );




  }

  getUserForId(id:any) : Observable<UserResp>{

    return this.userService.getUser(id);

  }

}
