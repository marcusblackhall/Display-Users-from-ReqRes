import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {

 @ViewChild ('appheader')
 appheader!:ElementRef

  constructor( private renderer2:Renderer2 ){}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.renderer2.setStyle(this.appheader.nativeElement,'color' ,'black');
  }

}
