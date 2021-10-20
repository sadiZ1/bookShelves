import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingupComponent } from './auth/singup/singup.component';
import { SinginComponent } from './auth/singin/singin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import {AuthGuardService} from "./services/auth-guard.service";
import {BooksService} from "./services/books.service";
import {AuthService} from "./services/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
const appRoutes: Routes = [
  {path:'auth/singup' , component: SingupComponent},
  {path:'auth/singin' , component: SinginComponent},
  {path:'books' , component: BookListComponent},
  {path:'books/new' , component: BookFormComponent},
  {path:'books/view:id' , component: SingleBookComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    SinginComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    BooksService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
