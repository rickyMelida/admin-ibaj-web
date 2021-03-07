import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "../../services/auth-service/auth-service.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    pass:''
  }
  user: boolean = false;
  constructor(private auth: AuthServiceService, private route: Router) { }

  ngOnInit(): void {
    // this.loginEmail();
  }

  ingresar(ingreso: any) {

  }

  logout() {
    this.auth.logout();
  }

  existUser():boolean {
    if(this.auth.usuario.uid) {
      this.user = true;
    }
    return this.user;
  }

  loginEmail() {
    this.auth.loginEmail(this.login.email, this.login.pass)
    .then(res=>{
      alert('Excelente');
      this.route.navigate(['home']);
    })
    .catch(err=>{
      alert('Errror!!');
    })
  }



}
