import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  errorMessage: string;

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['/edit-emp-reactive']);
      this.authService.login();
      // Store successful login status in service
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

}
