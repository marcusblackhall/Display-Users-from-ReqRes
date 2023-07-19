import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[makered]'
})
export class MakeredDirective implements OnInit {

  @Input('makered')
  isRed:boolean = false;


  constructor(private elementRef:ElementRef, private renderer:Renderer2) {

  }
  ngOnInit(): void {

    if (this.isRed){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    }
  }

}
