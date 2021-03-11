import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { DataUser } from 'src/app/models/dataUser.model';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { LoginModel } from '../../../models/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: LoginModel = {
    email: '',
    pass: '',
    existUser: false,
    rememberMe: false
  }
  dataUser: DataUser = {
    auth: false,
    email: '',
    rememberMe: false
  };

  @Output() val: EventEmitter<any> = new EventEmitter();
  authUser: boolean = false;
  chkRemember: HTMLFormElement;

  constructor(private auth: AuthServiceService) { }

  ngOnInit(): void {
  }

  loginEmail() {
    this.getRememberMe();
    this.loginWithEmail(this.login);
  }

  loginWithEmail(dataLogin: LoginModel) {
    this.auth.loginEmail(dataLogin.email, dataLogin.pass)
      .then(res => {
        this.authUser = true;
        this.setDataUser(this.login);
        this.val.emit(this.dataUser);
      })
      .catch(err => {
        alert('Errror!!');
      });
  }

  setDataUser(dataUser: LoginModel) {
    this.dataUser.email = dataUser.email;
    this.dataUser.rememberMe = dataUser.rememberMe;
    this.dataUser.auth = this.authUser;
  }

  getRememberMe() {
    this.chkRemember = document.querySelector('#remember');
    this.login.rememberMe = this.chkRemember.checked;
    this.setRememberMe(this.login.rememberMe);
  }

  setRememberMe(rememberMe: boolean) {
    if (rememberMe) {
      localStorage.setItem('stateAuth', '{state : true}');
    }
  }
}
