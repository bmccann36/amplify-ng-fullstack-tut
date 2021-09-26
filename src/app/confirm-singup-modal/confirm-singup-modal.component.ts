import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-singup-modal',
  templateUrl: './confirm-singup-modal.component.html',
  styleUrls: ['./confirm-singup-modal.component.scss']
})
export class ConfirmSingupModalComponent implements OnInit {
  confirmForm = this.formBuilder.group({
    email: '',
    confirmationCode: ''
  });
  constructor(
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log('form data is ', this.confirmForm.value);
    const confirmVals = this.confirmForm.value;
    try {
      const response = await Auth.confirmSignUp(confirmVals.email, confirmVals.confirmationCode);
      console.log('response :>> ', response);
    } catch (error) {
      console.error('error confirming sign up', error);
    }
  }

}
