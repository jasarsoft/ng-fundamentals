import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [],
  declarations: [ProfileComponent],
  providers: [],
})
export class UserModule { }
