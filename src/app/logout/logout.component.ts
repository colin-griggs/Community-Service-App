import { Component } from '@angular/core';
import { CognitoService } from '../cognito.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private CognitoService: CognitoService) {
    
  }

  public ngOnInit(): void {
    this.CognitoService.signOut().then(() => {
      console.log("Logged Out")
    })
  }

}
