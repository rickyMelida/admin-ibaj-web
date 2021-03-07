import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "../../services/auth-service/auth-service.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: boolean = false;
  constructor(private auth: AuthServiceService) { }

  ngOnInit(): void {
  }

  ingresar(ingreso: any) {
    this.auth.login();
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

}
