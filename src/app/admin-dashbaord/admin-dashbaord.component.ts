import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashbaord',
  templateUrl: './admin-dashbaord.component.html',
  styleUrls: ['./admin-dashbaord.component.scss']
})
export class AdminDashbaordComponent implements OnInit {
  public UI = 'admin';
  constructor() { }

  ngOnInit(): void {
  }

}
