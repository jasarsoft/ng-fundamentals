import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'profile.component.html',
  styles: [`
    em { float: right; color: #E05C67; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }

  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.touched
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.touched
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
