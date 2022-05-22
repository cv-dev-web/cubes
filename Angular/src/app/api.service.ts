import { Injectable, Output, EventEmitter } from '@angular/core';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './users';
import { Observable, throwError } from 'rxjs';
import { Resources } from './resources';

@Injectable({
providedIn: 'root'
})

export class ApiService {
redirectUrl: string | undefined;
baseUrl:string = "http://localhost/CUBE/php";
apiURL:string = "https://projetcube.cv-dev-web.fr/apiPlatform";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

constructor(private httpClient : HttpClient) { }

// Http Options
httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
};

// public userlogin(username: any, password: any) {
//   //alert(username)
//   return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
//   .pipe(map(Users => {
//     this.setToken(Users[0].id);
//     this.getLoggedInName.emit(true);
//     return Users;
//   }));
// }

public userregistration(name: any, prenom: any, pwd: any, cpassword: any, email: any, date: any) {
return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, prenom, pwd, cpassword, email, date })
.pipe(map(Users => {
return Users;
}));
}

// public ressourcesAdd(titre: any, categorie: any, type: any, description: any, image: any, video: any, visibilite : any) {
//     var id = this.getToken;
//     return this.httpClient.post<any>('https://projetcube.cv-dev-web.fr/apiPlatform/resources', { title: titre, 
//     category : categorie, type : type, text : description, contents : [image, video], visibility : visibilite, user: id})
//     .pipe(map(Ressource => {
//     return Ressource;
//     }));
// }
// HttpClient API post() method => Create employee
resourceAdd(resources: any): Observable<Resources> {
    resources.user = '/apiPlatform/users/1';
    return this.httpClient
      .post<Resources>(
        this.apiURL + '/resources',
        JSON.stringify(resources),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

userAdd(users: any): Observable<Users> {
    return this.httpClient
      .post<Users>(
        this.apiURL + '/create_user',
        JSON.stringify(users),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
userLogin(users: any): Observable<Users> {
    return this.httpClient
      .post<any>(
        this.apiURL + '/create_user',
        JSON.stringify(users),
        this.httpOptions
      )
      .pipe(map(Users => {
        this.setToken(Users.token);
        this.getLoggedInName.emit(true);
        return Users;
      }),retry(1), catchError(this.handleError));
  }
// public userLogin(username: any, password: any) {
//   //alert(username)
//   return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
//   .pipe(map(Users => {
//     this.setToken(Users[0].id);
//     this.getLoggedInName.emit(true);
//     return Users;
//   }));
// }





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


// Error handling
handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}