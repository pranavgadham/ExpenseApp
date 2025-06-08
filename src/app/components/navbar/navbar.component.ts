import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private service: AppService, private router:Router) {}

  ngOnInit(): void {
    this.service.getLoginStatus().subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  logout():void{
    this.service.logout().subscribe({
      next:(response)=>{
        alert(response.message);
        this.service.setLoginStatus(false);
        this.router.navigate(['']);
      },
      error:(error)=>{
        alert(error.message);
      }
    })
  }
}