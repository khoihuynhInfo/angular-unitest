import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // synchronous functions.
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  // asynchronous functions.
  // isAuthenticated(): Promise<boolean> {
  //   return Promise.resolve(!!localStorage.getItem('token'));
  // }

}