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

  /**
   * 
   * @param event 获取子组件app-spc-topbar中更改的isCollpased的值，讲该值传递到另外一个子组件app-spc-sidebar
   */
  getIsCollapsedValue(event) {
    this.isCollapsed = event;
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/account/login')
  }
  
  changePassword(): void {
    console.log('enter into change password function!');
  }

}
