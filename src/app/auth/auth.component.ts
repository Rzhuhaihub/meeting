import { JwtService } from './../core/service/jwt.service';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  userName: string = "17605015992"
  pass: string = "123456"
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.userName,this.pass)
  }
}
