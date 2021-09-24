import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './pairDevice.component.html',
  styleUrls: ['./pairDevice.component.scss']
})
export class PairDeviceComponent implements OnInit {
  isPairing = false;
  pairingCompleted = false;
  otCode = new FormControl('',
    [Validators.required, Validators.minLength(8), Validators.maxLength(8)]
  );
  ngOnInit() {

  }

  async onRegisterClicked() {
    console.log('the form input is: ', this.otCode.value);
    this.isPairing = true;
    await this.sleep(2000);
    console.log('done sleeping');
    this.isPairing = false;
    this.pairingCompleted = true;

  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
