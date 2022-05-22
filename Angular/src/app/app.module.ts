import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { HttpClientModule } from '@angular/common/http';
import { RessourcesListComponent } from './ressources-list/ressources-list.component';

import { NgMaterialModule } from './ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { RessourcesViewComponent } from './ressources-view/ressources-view.component';

import { TestListComponent } from './test-list/test-list.component';

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
    TestListComponent
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
    CommonModule
  ],
  providers: [
    //AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
