import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spc-topbar',
  templateUrl: './spc-topbar.component.html',
  styleUrls: ['./spc-topbar.component.less']
})
export class SpcTopbarComponent implements OnInit {
  isCollapsed = false;
  
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/account/login')
  }
  
  changePassword(): void {
    console.log('enter into change password function!');
  }


}
