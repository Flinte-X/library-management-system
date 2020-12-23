import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashbaord',
  templateUrl: './user-dashbaord.component.html',
  styleUrls: ['./user-dashbaord.component.scss']
})
export class UserDashbaordComponent implements OnInit {
  public UI = 'user-dashboard';
  constructor() { }

  ngOnInit(): void {
  }

}
