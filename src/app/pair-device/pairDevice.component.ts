import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-stepper',
  templateUrl: './pairDevice.component.html',
  styleUrls: ['./pairDevice.component.scss']
})
export class PairDeviceComponent implements OnInit {
  isPairing = false;
  pairingCompleted = false;
  pairingError = false;
  otCode = new FormControl('',
    [Validators.required, Validators.minLength(8), Validators.maxLength(8)]
  );
  ngOnInit() {

  }

  async onRegisterClicked() {
    console.log('the form input is: ', this.otCode.value);
    this.isPairing = true;
    console.log('calling /pair-device');
    const postInput = {
      body: {
        oneTimeCode: this.otCode.value
      },
    };
    try {
      const apiRes = await API.post('rmXwordApi', '/pair-device', postInput)
      console.log('apiRes', apiRes);
      this.isPairing = false;
      this.pairingCompleted = true;
    }
    catch (apiErr) {
      console.error(apiErr)
      this.isPairing = false;
      this.pairingError = true; // maybe down the line this can be an enum of different error types
    }


  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
