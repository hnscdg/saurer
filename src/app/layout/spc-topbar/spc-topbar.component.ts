import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/_services';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-spc-topbar',
  templateUrl: './spc-topbar.component.html',
  styleUrls: ['./spc-topbar.component.less']
})
export class SpcTopbarComponent implements OnInit {
  @Output() private passIsCollapsed = new EventEmitter();
  isCollapsed: boolean = false;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: string;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.value.username;
   }

  ngOnInit(): void {
  }

  /**
   * 点击折叠图标，触发isCollapsed标志位，并将该值传递到父组件layout-component
   */
  changeIsCollapsedValue() {
    this.isCollapsed = !this.isCollapsed;
    this.passIsCollapsed.emit(this.isCollapsed);
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/account/login')
  }
  
  changePassword(): void {
    console.log('enter into change password function!');
  }


}
