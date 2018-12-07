import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordValidation, EmailValidation } from '../common/validations';
import { UiService } from '../common/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    .error {
      color: red;
    }
    div[fxLayout] {
      margin-top: 32px;
    }
  `]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError = '';
  redirectUrl;  

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private uiService: UiService
  ) { 
    route.paramMap.subscribe(params => {
      this.redirectUrl = params.get('redirectUrl')
    });
  }

  ngOnInit() {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', EmailValidation ],
      password: ['', PasswordValidation]
    })
  }

  async login(subittedForm: FormGroup) {
    this.authService
      .login(subittedForm.value.email, subittedForm.value.password)
      .subscribe(authStatus => {
        if(authStatus.isAuthenticated) {
          this.uiService.showToast(`Welcome! Role: ${authStatus.userRole}`);
          this.router.navigate([this.redirectUrl || '/manager'])
        }
      }, error => (this.loginError = error))
  }

}
