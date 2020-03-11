import { Observable } from 'rxjs';
import { LoginSession } from 'src/app/models/login-session';

// predefined service
export interface ILoginService {
    /**
     * Login
     */
    login(loginData: {userName:string, password: string, remember: boolean }): Observable<LoginSession>;

    /**
     * logoff
     */


     /**
      * change passord
      */


}