import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Auth } from 'aws-amplify';

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
  async onSubmit(): Promise<void> {
    //! sign in
    // console.warn('login data is: ', this.loginForm.value);
    const loginVals = this.loginForm.value;
    // console.log(loginVals.email, loginVals.password);
    // const user = await Auth.signIn(loginVals.email, loginVals.password);
    // console.log(user);
    // this.loginForm.reset();

    //! sign up
    const { user } = await Auth.signUp({
      username: loginVals.email,
      password: loginVals.password,
    });
    console.log(user);
  }

}
