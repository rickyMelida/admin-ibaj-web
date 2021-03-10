import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { LoginModel } from '../../../models/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : LoginModel = {
    email: '',
    pass:'',
    existUser: false,
    rememberMe: false
  }
  @Output() val: EventEmitter<any> = new EventEmitter();
  user: boolean = false;
  chkRemember: HTMLFormElement;

  constructor() { }

  ngOnInit(): void {
  }

  loginEmail() {
    this.getRememberMe();
    this.val.emit(this.login);
  }

  getRememberMe() {
    this.chkRemember = document.querySelector('#remember');
    this.login.rememberMe =  this.chkRemember.checked;
  }
}
