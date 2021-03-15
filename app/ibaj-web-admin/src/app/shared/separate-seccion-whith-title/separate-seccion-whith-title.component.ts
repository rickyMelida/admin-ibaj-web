import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-separate-seccion-whith-title',
  templateUrl: './separate-seccion-whith-title.component.html',
  styleUrls: ['./separate-seccion-whith-title.component.css']
})
export class SeparateSeccionWhithTitleComponent implements OnInit {

  @Input() title_section: string;

  constructor() { }

  ngOnInit(): void {
  }

}
