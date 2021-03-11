import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { DataUser } from 'src/app/models/dataUser.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stateAuth: boolean = false;
  dataUser: DataUser;

  constructor( private auth: AuthServiceService)  { }

  ngOnInit(): void {
    this.valueStateAuthUser();
  }

  valueStateAuthUser() {
    if(this.stateAuth || localStorage.getItem('stateAuth')) {
      this.stateAuth = true;
    }
  }

  getdataUser(dataUser: DataUser) {
    this.stateAuth = dataUser.auth;
  }





}
