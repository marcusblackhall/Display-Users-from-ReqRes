import { AfterViewChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.css']
})
export class PageNavigationComponent implements OnInit, AfterViewChecked {

  @Input()
  noPages!: number

  @Output()
  currPage = new EventEmitter<number>();

  pageNo!: number;

  pages: number[] = [];

  constructor() { }
  ngAfterViewChecked(): void {

    if (this.noPages) {

      for (let i = 0; i < this.noPages; i++) {
        this.pages[i] = i + 1;
      }

    }
  }

  ngOnInit(): void {
      this.pageNo = 1;
      this.currPage.emit(1);


  }
  goToPage(pageNo: number) {
    this.pageNo = pageNo;
    this.currPage.emit(pageNo);
  }

  goToNext() {
    if (this.pageNo >= this.noPages) return;
    this.pageNo++;
    this.currPage.emit(this.pageNo);
  }

  goToPrev() {

    if (this.pageNo <= 1){
      return;
    }
    this.pageNo--;
    this.currPage.emit(this.pageNo);

  }

}
