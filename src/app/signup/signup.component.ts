import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { User } from '../app.module';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private fb: FormBuilder, private service: AppService, private router: Router) {

  }

  signupForm = this.fb.group({
    name: ['',[Validators.required]],
    email: ['',[Validators.required]],
    password: ['',[Validators.required]]
  });

  onSubmit() :void{
    if(this.signupForm.valid) {
      const userData:User = this.signupForm.value as User;
      this.service.signup(userData).subscribe({
        next:(response)=>{
          if(response.success === true) {
            this.router.navigate(['']);
          }else{
            alert('Signup failed: ' + response.message);
          }
        }
      })
    }
  }
}
