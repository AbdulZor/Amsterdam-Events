import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public userName: string;
  public token: string;


  constructor() { }

  signOn(eMail: string, passWord: string){
    firebase.auth().signInWithEmailAndPassword(eMail, passWord)
      .then(res => {
        this.userName = res.user.email;
        console.log(this.userName);
        firebase.auth().currentUser.getIdToken().then(
          token => this.token = token
        );
      })
      .catch(err => console.log(err));
  }

  signUp(eMail: string, passWord: string){
    firebase.auth().createUserWithEmailAndPassword(eMail, passWord)
      .then(res => {
        this.userName = res.user.email;

        console.log(this.userName);
      })
      .catch(err => console.log(err));
  }


  signOff(){
    firebase.auth().signOut()
      .then(res => {
        console.log("In signOut, res: " + res +  " \t" + this.userName);
        this.token = null;
        this.userName = null;
      });
  }
}
