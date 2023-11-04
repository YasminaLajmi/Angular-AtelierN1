import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { UserslistComponent } from './userslist/userslist.component';
import { FormsModule } from '@angular/forms';
import { UserformComponent } from './userform/userform.component';


@NgModule({
  declarations: [UsersComponent, UserslistComponent, UserformComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UserModule {}
