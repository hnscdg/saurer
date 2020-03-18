import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login')
  }
  
  changePassword(): void {
    console.log('enter into change password function!');
  }

}
