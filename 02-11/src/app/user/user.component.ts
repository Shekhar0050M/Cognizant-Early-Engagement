import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  subscription: Subscription;
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.subscription = this.userService.getAllUser().subscribe((users) => {
      this.users = users;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  register(): void {
    const registerData = {
      email: 'invalidemail',
      password: 'password'
    };
    this.userService.registerUser(registerData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        this.errorMessage ='Error ${error.status}: ${error.error}';
      }
    )
  }
}
