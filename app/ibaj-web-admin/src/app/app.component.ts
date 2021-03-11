import { Component, OnInit } from '@angular/core';
import { DataUser } from './models/dataUser.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  stateAuth: boolean = false;
  dataUser: DataUser;

  constructor() { }

  ngOnInit(): void {
    this.valueStateAuthUser();
  }

  valueStateAuthUser() {
    if (this.stateAuth || localStorage.getItem('stateAuth')) {
      this.stateAuth = true;
    }
  }

  getdataUser(dataUser: DataUser) {
    this.stateAuth = dataUser.auth;
  }
}

