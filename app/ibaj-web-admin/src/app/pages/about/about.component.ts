import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service/auth-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  userExist: boolean;
  constructor(private _session: AuthServiceService) { }

  ngOnInit(): void {
    this.userExist = this._session.existUser();
  }

}
