// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { AuthService } from './auth.service';
// import { Injectable } from '@angular/core';

// @Injectable()
// export class AuthGuard implements CanActivate {
//     constructor(private authService: AuthService, private router : Router) { }

//     canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//         if(this.authService.isAuth) {
//             return true;
//           } else {
//             this.router.navigate(['/auth']);
//           }
//   }
// }

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Injectable({
providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
constructor(private dataService: ApiService,private router: Router ) {}
canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
        const routeurl: string = state.url;
        return this.isLogin(routeurl)!;
    }

    isLogin(routeurl: string) {
        if (this.dataService.isLoggedIn()) {
            return true;
        }

        this.dataService.redirectUrl = routeurl;
        this.router.navigate(['/login'], {queryParams: { returnUrl: routeurl }} );
        return false;
    }
}