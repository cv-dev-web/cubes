import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './services/auth-guard.service';
import { RessourcesListComponent } from './ressources-list/ressources-list.component';
import { RessourcesAddComponent } from './ressources-add/ressources-add.component';
import { RessourcesViewComponent } from './ressources-view/ressources-view.component';
import { ParametresComponent } from './parametres/parametres.component';
import { TestListComponent } from './test-list/test-list.component';

const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'registration', component: RegisterComponent },
{ path: 'ressourcesList', component: RessourcesListComponent },
{ path: 'test', component: TestListComponent },
{ path: 'ressourcesView/:id', component: RessourcesViewComponent },
{ path: 'ressourcesView', component: RessourcesViewComponent },
{ path: 'ressourcesAdd', component: RessourcesAddComponent },
{ path: 'parametres', component: ParametresComponent },
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] }

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }