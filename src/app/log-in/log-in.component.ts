import { Component } from '@angular/core';
import { CognitoService, IUser } from '../cognito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  /* username = '';
  password = ''; */

  user: IUser;

  constructor(private router: Router, private CognitoService: CognitoService) {
    this.user = {} as IUser
  }

  /* signIn() {
    console.log("username", this.username, "password=", this.password);
    if (this.username === 'admin' && this.password === 'bigfoot') {
      console.log("Login Success!");
    } else {
      console.log("Login Failure!");
    } */

    public signIn() {
      this.CognitoService.signIn(this.user).then(() => {
        this.router.navigate(['/']);
      }).catch(() => {
        console.log("Something bad happened in sign-in in log-in component");
      })
      }


}


