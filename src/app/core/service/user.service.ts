import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(
    private jwtHelper: JwtHelperService
  ) {}

  getCurrentUser() {
    return this.jwtHelper.decodeToken().data
  }
}
