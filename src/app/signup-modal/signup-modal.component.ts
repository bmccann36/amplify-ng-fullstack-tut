import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss']
})
export class SignupModalComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
  ) { }
  signUpForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  async onSubmit() {
    const { email, password } = this.signUpForm.value;
    console.error(email, password);
  }


  ngOnInit(): void {
  }

}
