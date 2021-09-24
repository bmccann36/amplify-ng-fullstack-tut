import { ConfirmSingupModalComponent } from './../confirm-singup-modal/confirm-singup-modal.component';
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


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
  modalRef?: BsModalRef;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: BsModalService
  ) { }

  openModal() {
    this.modalRef = this.modalService.show(ConfirmSingupModalComponent);
  }

  ngOnInit(): void {
  }
  async onSubmit(): Promise<void> {
    //! sign in
    // console.warn('login data is: ', this.loginForm.value);
    // const loginVals = this.loginForm.value;
    // console.log(loginVals.email, loginVals.password);
    // try {
    //   const amplRes = await Auth.signIn(loginVals.email, loginVals.password);
    // } catch (ex) {
    //   console.error(ex);
    // }
    // this.loginForm.reset();

    //! sign up
    // const amplRes = await Auth.signUp({
    //   username: loginVals.email,
    //   password: loginVals.password,
    // });
    // console.log(amplRes);
  }

}
