import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from '../_services';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
        const currentUser = this.authenticationService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.token;
        const isApiUrl = request.url.startsWith(environment.apiUrl);

        if(isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        // if(isLoggedIn) {
        //     request = request.clone({
        //         setHeaders: {
        //             'Authorization': `Bearer ${currentUser.token}`,
        //             'Access-Control-Allow-Headers': '*'
        //         }
        //     });
        // }

        return next.handle(request);
    }
}

export const jwtInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
}