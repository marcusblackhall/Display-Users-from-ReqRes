import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MakeredDirective } from './makered.directive';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ListUsers } from './users/listuser';
import { PageNotFound } from './pagenotfound';
import { UserdetailComponent } from './userdetail/userdetail.component';

const routes:Routes = [

  {path: 'users' , component : ListUsers},
  {path: 'userdetail/:id',component: UserdetailComponent},
  { path: '',   redirectTo: '/users', pathMatch: 'full' },
  
  {path: '**' , component : PageNotFound }

]

@NgModule({
  declarations: [
    AppComponent,
    MakeredDirective,
    ListUsers,
    PageNotFound,
    UserdetailComponent
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
