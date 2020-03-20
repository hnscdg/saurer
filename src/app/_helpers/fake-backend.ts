import { Injectable } from "@angular/core";
import { User, Role } from '../_models';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, delay, dematerialize } from 'rxjs/operators';

const users: User[] = [
    { id: 1, username: 'admin', password: '123qwe', role: Role.Admin },
    { id: 2, username: 'user', password: 'user', role: Role.User }
]
@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
                .pipe(mergeMap(handleRoute))
                .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown
                .pipe(delay(500))
                .pipe(dematerialize());


        function handleRoute() {
            switch(true) {
                case url.endsWith('users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route function
        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password)
            if(!user) {
                return error('username or password is incorrect!');                
            }
            return ok({
                id: user.id,
                username: user.username,
                role: user.role,
                token: `fake-jwt-token.${user.username}.${user.id}`
            })
        }
        
        function getUsers() {
            if(!isAdmin()) return unauthorizated();
            return ok(users);
        }

        function getUserById() {
            if(!isLoggedIn()) return unauthorizated();

            // only admins can access other user records
            if(isAdmin() && currentUser().id !== idFromUrl()) return unauthorizated();

            const user = users.find(x => x.id === idFromUrl());
            return ok(user);
        }
        
        function unauthorizated() {
            return throwError({ status: 401, error: { message: 'unauthorized' } });
        }
        // helper function
        function isAdmin() {
            return isLoggedIn() && currentUser().role === Role.Admin;
        }

        function isLoggedIn() {
            const authHeader = headers.get('Authorization') || '';
            return authHeader.startsWith('Bearer fake-jwt-token');
        }

        function currentUser() {
            if(!isLoggedIn()) return;
            const id = parseInt(headers.get('Authorization').split('.')[1]);
            return users.find(x => x.id === id );

        }

        function ok(body) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function error(message: string) {
            return throwError({ status: 400, error: { message } });
        }
        
        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
        
    }        

}

export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
}
