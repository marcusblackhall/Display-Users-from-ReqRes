import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MakeredDirective } from './makered.directive';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule, Routes } from '@angular/router';
import { ListUsers } from './users/listuser';
import { PageNotFound } from './pagenotfound';

const routes:Routes = [

  {path: 'users' , component : ListUsers},
  { path: '',   redirectTo: '/users', pathMatch: 'full' },
  {path: '**' , component : PageNotFound }

]

@NgModule({
  declarations: [
    AppComponent,
    MakeredDirective,
    ListUsers,
    PageNotFound
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {








}
