import { Component } from '@angular/core';
import { User } from 'src/app/core/user';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {
user!: User;
}
