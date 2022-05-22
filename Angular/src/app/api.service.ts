import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
providedIn: 'root'
})

export class ApiService {
redirectUrl: string | undefined;
baseUrl:string = "http://localhost/CUBE/php";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient) { }
public userlogin(username: any, password: any) {
//alert(username)
return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
.pipe(map(Users => {
this.setToken(Users[0].id);
this.getLoggedInName.emit(true);
return Users;
}));
}

public userregistration(name: any, prenom: any, pwd: any, cpassword: any, email: any, date: any) {
return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, prenom, pwd, cpassword, email, date })
.pipe(map(Users => {
return Users;
}));
}

public ressourcesAdd(titre: any, categorie: any, type: any, description: any, image: any, video: any, visibilite : any) {
    var id = this.getToken;
    return this.httpClient.post<any>(this.baseUrl + '/ressourcesAdd.php', { titre, categorie, type, description, image, video, visibilite, id})
    .pipe(map(Users => {
    return Users;
    }));
}


public ressourcesView(id: any) {
    // //alert(username)
    return this.httpClient.get<any>('https://projetcube.cv-dev-web.fr/apiPlatform/resources/'+id,  { 'headers': {'content-type': 'application/json'}})
    .pipe(map(Ressource => {
    console.log("Ressource : ");
    console.log(Ressource);
    return Ressource;
    }));
    // return this.httpClient.get<any>('https://projetcube.cv-dev-web.fr/apiPlatform/resources/'+id, { 'headers': {'content-type': 'application/json'} }).subscribe(data => {
    //   //data = data['hydra:member']; 
    //   console.log(data)
    //   return data;
    // });
}

//token
setToken(token: string) {
localStorage.setItem('token', token);
}
getToken() {
return localStorage.getItem('token');
}
deleteToken() {
localStorage.removeItem('token');
}
isLoggedIn() {
const usertoken = this.getToken();
if (usertoken != null) {
return true
}
return false;
}
}