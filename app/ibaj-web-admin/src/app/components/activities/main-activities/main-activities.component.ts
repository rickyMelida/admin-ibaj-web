import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-activities',
  templateUrl: './main-activities.component.html',
  styleUrls: ['./main-activities.component.css']
})
export class MainActivitiesComponent implements OnInit {

  activities: Array<any> = [1, 2, 3,];

  constructor() { }

  ngOnInit(): void {
  }

}
