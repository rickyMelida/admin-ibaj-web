import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private _sesion: AuthServiceService ) { }

  ngOnInit(): void {
  }

  logout() {
    this._sesion.logout();
    localStorage.removeItem('stateAuth');
  }

}
