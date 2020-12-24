import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  public UI = 'common';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  gotoUserLogin(): void{
    this.router.navigate([('../user-login')], {relativeTo: this.route});
  }
}
