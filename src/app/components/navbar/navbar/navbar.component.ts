import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navUser: User;
  constructor(public user: AuthService, private router:Router) { }

  ngOnInit() {
    this.navUser = JSON.parse(window.sessionStorage.getItem('loggedInUser'));
  }

  logout() {
    window.sessionStorage.clear();
    this.router.navigateByUrl('/home');
  }

  login(){
    this.router.navigateByUrl('/login')
  }
}
