import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public UI = 'admin';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  gotoAdminDashboard(): void{
    this.router.navigate([('admin-dashboard')], {relativeTo: this.route});
  }
  gotoAddCategory(): void{
    this.router.navigate([('add-category')], {relativeTo: this.route});
  }
  gotoManageCategory(): void{
    this.router.navigate([('manage-category')], {relativeTo: this.route});
  }
  gotoAddAuthor(): void{
    this.router.navigate([('add-author')], {relativeTo: this.route});
  }
  gotoManageAuthor(): void{
    this.router.navigate([('manage-author')], {relativeTo: this.route});
  }
  gotoAddBook(): void{
    this.router.navigate([('add-book')], {relativeTo: this.route});
  }
  gotoManageBook(): void{
    this.router.navigate([('manage-book')], {relativeTo: this.route});
  }
  gotoIssueNewBook(): void{
    this.router.navigate([('issue-new-book')], {relativeTo: this.route});
  }
  gotoManageIssuedBooks(): void{
    this.router.navigate([('manage-issued-books')], {relativeTo: this.route});
  }
  gotoRegStudents(): void{
    this.router.navigate([('reg-students')], {relativeTo: this.route});
  }
  gotoAdminChangePassword(): void{
    this.router.navigate([('admin-change-password')], {relativeTo: this.route});
  }
}
