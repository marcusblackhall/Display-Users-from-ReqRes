import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ListUsers } from './users/listuser';
import { PageNotFound } from './pagenotfound';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [

  {path: 'users' , component : ListUsers},
  {path: 'userdetail/:id',component: UserdetailComponent},
  { path: '',   redirectTo: '/users', pathMatch: 'full' },

  {path: '**' , component : PageNotFound }

]

@NgModule({
  declarations: [
    AppComponent,
    ListUsers,
    PageNotFound,
    UserdetailComponent,
    PageNavigationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {








}
