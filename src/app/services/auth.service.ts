import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../users/user';
import { shareReplay } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiServerUrl = environment.apiBaseUrl;
  private _loggedInUser?: User;

  constructor(private http:HttpClient) { }

  login(email:string, password:string) {
    return this.http.post<User>(`${this.apiServerUrl}/authenticate`, {email, password}).pipe(shareReplay())
  }

  get loggedInUser(): User {
    console.log(this._loggedInUser);
    return this._loggedInUser;
  }

  set loggedInUser(user: User) {
    this._loggedInUser = user;
  }
}
