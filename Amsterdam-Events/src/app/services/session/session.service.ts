import {Injectable} from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public userName: string;
  public token: string;


  constructor(private router: Router) {
  }

  signOn(eMail: string, passWord: string) {
    firebase.auth().signInWithEmailAndPassword(eMail, passWord)
      .then(res => {
        this.userName = res.user.email;
        this.router.navigate(['/']);
        console.log(firebase.auth().currentUser);
        firebase.auth().currentUser.getIdToken()
          .then(
            token => this.token = token
          );
      })
      .catch(err => console.log(err));
  }

  signUp(eMail: string, passWord: string) {
    firebase.auth().createUserWithEmailAndPassword(eMail, passWord)
      .then(res => {
        this.userName = res.user.email;

        console.log(this.userName);
      })
      .catch(err => console.log(err));
  }


  signOff() {
    firebase.auth().signOut()
      .then(res => {
        console.log("In signOut, res: " + res + " \t" + this.userName);
        this.token = null;
        this.userName = null;
        this.router.navigate(['/']);
      });
  }

  isAuthenticated(){
    return this.token != null;
  }

  getToken(){
    console.log(firebase.auth().currentUser);
    firebase.auth().currentUser.getIdToken()
      .then(
        (token) => this.token = token
      ).catch(err => console.log(err));
    return this.token;
  }

  refreshToken(){

  }
}
