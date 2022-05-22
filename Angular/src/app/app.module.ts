import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './shared/authconfig.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
//import { AuthComponent } from './auth/auth.component';
//import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {ReactiveFormsModule } from '@angular/forms';

import { RessourcesListComponent } from './ressources-list/ressources-list.component';

import { NgMaterialModule } from './ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { RessourcesViewComponent } from './ressources-view/ressources-view.component';
import { RessourcesAddComponent } from './ressources-add/ressources-add.component';
import { TestListComponent } from './test-list/test-list.component';
import { CommentsModule } from './comments/comments.module';
import { User } from './shared/user';
import { UserProfileComponent } from './user-profile/user-profile.component';
// const appRoutes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'auth', component: AuthComponent },
//   { path: '', component: HomeComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    //AuthComponent,
    HomeComponent,
    DashboardComponent,
    RessourcesListComponent,
    RessourcesViewComponent,
    RessourcesAddComponent,
    TestListComponent,
    UserProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    NgMaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    CommentsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
