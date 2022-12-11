import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../../interfaces/user';
import { LoadingSpinnerService } from '../../core/loading-spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users!: IUser[]
  
  constructor(
    private userService: UserService,
    private spinner: LoadingSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.spinner.activate()
    this.userService.getUsers().subscribe({
      next: x => this.users = x,
      complete: () => this.spinner.deactivate(),
      error: () => this.router.navigate(['/404'])
    })
  }
}
