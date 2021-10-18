import { SignupModalComponent } from './../signup-modal/signup-modal.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserState } from 'src/types/Constants';



@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  @Output() userLoggedInEvent = new EventEmitter<string>();
  @Output() userWantsSignUp = new EventEmitter<void>();
  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });
  loginErrorCode = '';
  signUpModalRef!: BsModalRef;
  constructor(
    private formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
  ) { }

  async onSubmit() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await Auth.signIn(email, password);
      console.log('user :>> ', user);
      // raise an event so parent knows user is loggin is
      this.userLoggedInEvent.emit(UserState.LOGGED_IN)
      this.bsModalRef.hide();
    } catch (error : any) { // TODO handle ALL ERRORS and alert user
      console.error(error);
      this.loginErrorCode = error.code;
    }
  }

  launchSignUpComp(){
    this.bsModalRef.hide()
    this.userWantsSignUp.emit()
  }


  ngOnInit(): void {
  }

}
