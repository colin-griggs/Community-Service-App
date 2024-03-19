import { Component } from '@angular/core';
import { CognitoService, IUser } from '../cognito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isConfirm: boolean;
  user: IUser;
  
  constructor(private router: Router, private CognitoService: CognitoService) {
    this.isConfirm = false;
    this.user = {} as IUser;
  }

  public signUp(): void {
    this.CognitoService.signUp(this.user).then(() => {
      this.isConfirm = true;
    }).catch(() => {
      console.log("Something went wrong with signup!");
    })
  }

  public confirmSignUp(): void {
    this.CognitoService.confirmSignUp(this.user).then(() => {
      this.router.navigate(['/log-in']);
    }).catch(() => {
      console.log("Something went wrong with confirmSignUp!");
    })
  }
}
