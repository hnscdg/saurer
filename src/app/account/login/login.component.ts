import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from '../services/login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  errorMessage: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
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
      remember: this.validateForm.get('remember').value
    }
    // 登录验证，需要下一步完善
    this.loginService.login(params).subscribe( result => {
      if (result.userName == params.userName && result.password == params.password) {
        this.router.navigate(['/spc/welcome']);
      }
      else {
        this.errorMessage = true;
      }
    })

  }
  
}
