import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { UserService } from './../core/service/user.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  title: string = 'Welcome'
  menuList = environment.menuList
  user: any;
  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router :Router
  ) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }

  menuChange(e) {
    console.log(e)
    this.title= this.getTitleById(e.id)
    this.router.navigate(['/'+e.id])
  }

  getTitleById(id, navs: any = this.menuList) {
    let title = '';
    for (let i = 0; i < navs.length; i++) {
      if (navs[i].menus && navs[i].menus.length > 0) {
        title = navs[i].value + ' > ' + this.getTitleById(id, navs[i].menus);
        if (title[title.length - 2] !== '>') {
          return title;
        }
      } else {
        if (navs[i].id === id) {
          return title = navs[i].value;
        }
      }
    }
    return '';
  }

  logOut() {
    this.auth.loginOut();
  }
}
