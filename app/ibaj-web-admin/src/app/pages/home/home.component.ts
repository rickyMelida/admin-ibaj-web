import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stateAuth: boolean = false;

  constructor( private auth: AuthServiceService)  { }

  ngOnInit(): void {
    this.valueStateAuth();
  }

  valueStateAuth() {
    if(this.stateAuth || localStorage.getItem('stateAuth')) {
      this.stateAuth = true;
    }
  }

  dataLogin(dataLogin: LoginModel) {
    this.stateAuth = dataLogin.existUser;
    this.loginWithEmail(dataLogin);
    this.setRememberMe(dataLogin.rememberMe);
  }

  loginWithEmail (dataLogin: LoginModel) {
    this.auth.loginEmail(dataLogin.email, dataLogin.pass)
    .then(res=>{
      alert('Excelente');
      this.stateAuth = true;
    })
    .catch(err=>{
      alert('Errror!!');
    });
  }

  setRememberMe(rememberMe: boolean) {
    if(rememberMe) {
      localStorage.setItem('stateAuth', '{state : true}');
    }
  }

}
