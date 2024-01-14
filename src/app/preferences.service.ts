import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor() { }

  setNoPerPage(noPerPage:string){

    localStorage.setItem("NO_PER_PAGE",noPerPage);

  }

  getNoPerPage(){
    return localStorage.getItem("NO_PER_PAGE");
  }
}
