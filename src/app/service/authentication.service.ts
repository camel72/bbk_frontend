import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem('username', username)
      console.log("success")
      return true;
    } else {
      console.log("failed: username:" + username + "password" + password)
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
