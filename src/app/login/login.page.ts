import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { LoginService } from '../services/login.service';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private users: User[];
  private email: string;
  private password: string;
  private currentUser: User;
  private error: string;

  constructor(private router: Router, private loginService: LoginService) { 
    this.error = "";
  }

  ngOnInit() {
    localStorage.removeItem("hiking_currentuser");
    this.loginService.getUsers().subscribe(data => this.users = data);
  }

  register(form : NgForm) {
    this.email = form.value.email;
    this.password = form.value.password;
    this.currentUser = this.users.find((user: User) => user.email === this.email && user.password === this.password)

    if (this.currentUser){
      localStorage.setItem("hiking_currentuser", JSON.stringify(this.currentUser));
      this.router.navigate(["/list"]);
    }else{
      this.error = "L'email ou le mot de passe est incorrect";
    }
  }
}
