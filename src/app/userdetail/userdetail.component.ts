import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  constructor(private route:ActivatedRoute ) { }

  ngOnInit(): void {

   this.route.paramMap.pipe( 
      tap( parms =>console.log(parms)),
      switchMap( parms => of(1))
      
   );
    
      

   
  }

}
