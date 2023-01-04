import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any[];

  constructor(private http: HttpClient) { }
  getAllUser(): Observable<User[]>{
    return this.http.get<User[]>('https://reqres.in/api/users?page=2');
  }

  createUser(user: User): Observable<any> {
    return this.http.post('http://reqres.in/api/users', user);
  }
  
  updateUser(user: User): Observable<any> {
    return this.http.put('http://reqres.in/api/users/${id}',user);
  }

  deleteUser(user: User): Observable<any> {
    return this.http.delete('http://reqres.in/api/users/${id}');
  }

  registerUser(registerData: any){
    return this.http.post('http://reqres.in/api/register', registerData);
  }

  

}
