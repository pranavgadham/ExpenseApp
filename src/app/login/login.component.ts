import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../app.module';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private appService: AppService, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  onSubmit() {
    const formValues: User = this.loginForm.value as User;
    this.appService.verifyLogin(formValues).subscribe({
      next: (response) => {
        if (response.success) {
          this.appService.setLoginStatus(true);
          this.router.navigate(['home']);
        } else {
          alert(response.message || 'Login failed');
        }
      },
      error: (error) => {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again.');
      }
    });

  }
}
