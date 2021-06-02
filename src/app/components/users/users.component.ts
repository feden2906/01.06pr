import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(users => this.users = users.data);
  }
}
