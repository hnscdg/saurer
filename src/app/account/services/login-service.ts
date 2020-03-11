import { Injectable } from '@angular/core';
import { ILoginService } from '../Interfaces/ILogin-service';
import { Observable } from 'rxjs';
import { LoginSession } from '../../models/login-session';

@Injectable()
export class LoginService implements ILoginService {

  login(loginData: { userName: string; password: string; remember: boolean; }): Observable<LoginSession> {
      return new Observable(observer => {
        observer.next(this.getDemoSession())
      })
  }

  private getDemoSession(): LoginSession  {
    const result: LoginSession = {
      userName: 'admin',
      password: '123qwe',
      remember: true
    };
    return result;
  }


}
