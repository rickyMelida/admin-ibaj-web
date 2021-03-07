import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public usuario: any = {};

  constructor(private auth: AngularFireAuth) {
    auth.authState.subscribe( user =>{
      if(!user) {
        return;
      }
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    });
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginEmail(email: string, pass: string) {
    return this.auth.signInWithEmailAndPassword(email, pass);
  }

  logout() {
    this.usuario = {}
    this.auth.signOut();
  }
}
