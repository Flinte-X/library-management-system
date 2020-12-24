import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  gotoAdminLogin(): void{
    this.router.navigate([('admin-login')], {relativeTo: this.route});
  }

  gotoUserLogin(): void{
    this.router.navigate([('user-login')], {relativeTo: this.route});
  }

  gotoUserSignUp(): void{
    this.router.navigate([('user-signup')], {relativeTo: this.route});
  }

}
