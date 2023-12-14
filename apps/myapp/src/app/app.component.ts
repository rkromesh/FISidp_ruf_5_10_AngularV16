import { Component } from '@angular/core';
import { AuthService } from '@ruf/idp-auth';

@Component({
  selector: 'ruf-ws10-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myapp';
  constructor(private authService: AuthService){
  }

  logout(){
    console.log('logged out successfully');
    this.authService.logout(true);
  }
}
