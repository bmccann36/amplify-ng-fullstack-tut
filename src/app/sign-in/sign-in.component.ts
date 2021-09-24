import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    // Process login data here
    console.warn('login data is: ', this.loginForm.value);
    // this.loginForm.reset();
  }

}
