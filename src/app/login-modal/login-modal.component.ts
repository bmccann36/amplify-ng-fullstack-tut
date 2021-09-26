import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserState } from 'src/types/Constants';



@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  @Output() userLoggedInEvent = new EventEmitter<string>();
  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });
  loginError = false;
  loginErrorUserMessage = 'there was an error with log in';
  constructor(
    private formBuilder: FormBuilder,
    public bsModalRef: BsModalRef
  ) { }

  async onSubmit() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await Auth.signIn(email, password);
      console.log('user :>> ', user);
      // raise an event so parent knows user is loggin is
      this.userLoggedInEvent.emit(UserState.LOGGED_IN)
      this.bsModalRef.hide();
    } catch (error) { // TODO handle ALL ERRORS and alert user
      this.handleLoginErrorMessageDisplay(error)
    }
  }

  handleLoginErrorMessageDisplay(error: any) {
    console.error(error);
    if (error.code == 'UserNotFoundException') {
      this.loginErrorUserMessage = 'your account was not found'
    }
    this.loginError = true;
  }

  ngOnInit(): void {
  }

}
