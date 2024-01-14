import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';
import { UserService } from '../service/user-service';
import { User, UserResp} from '../model/user';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  
  error: string = "";
  user$ : Observable<User>;

  constructor(private route:ActivatedRoute, private userService:UserService ) { 
    this.user$ = of();
  }

  ngOnInit(): void {

    
   this.user$ = this.route.paramMap.pipe(
      switchMap( (parms:ParamMap) =>  {
        let parmId =  parms.get('id');
       return  this.getUserForId(parmId || "");
      }),
       catchError(e => {
        this.error = "User does dot exist";
        return of({} as User);})

   );
  }

  getUserForId(id:string) : Observable<User>{

    return this.userService.getUser(id)
    .pipe( 
      
      map((userResp:UserResp) => userResp.data )
    );

  }

}
