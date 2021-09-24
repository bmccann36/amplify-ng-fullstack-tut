import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-singup-modal',
  templateUrl: './confirm-singup-modal.component.html',
  styleUrls: ['./confirm-singup-modal.component.scss']
})
export class ConfirmSingupModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
