import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  userName
  password

  login(f) {
    console.log(f.value)
  }
}
