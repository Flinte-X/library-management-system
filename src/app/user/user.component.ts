import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public UI = 'user';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  gotoUserDashboard(): void{
    this.router.navigate([('user-dashboard')], {relativeTo: this.route});
  }
  gotoIssuedBooks(): void{
    this.router.navigate([('issued-books')], {relativeTo: this.route});
  }
}
