import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from 'src/app/_services';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  errorMessage: boolean = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
    ) { 
      // redirect to home if already logged in
      if(this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
      }

    }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      // remember: [true]
    });
  }

  submitForm(): void {
    this.errorMessage = false;
    // 标记为脏检测
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    // 获取输入的用户名和密码
    const params = {
      userName: this.validateForm.get('userName').value,
      password: this.validateForm.get('password').value,
      // remember: this.validateForm.get('remember').value
    }
    // 登录验证，需要下一步完善
    this.authenticationService.login(params.userName, params.password)
        .pipe(first())
        .subscribe(
          data => { 
            this.router.navigate(['/spc/welcome']);
          },
          error => {
            this.errorMessage = true;
          }
          );

  }
  
}
