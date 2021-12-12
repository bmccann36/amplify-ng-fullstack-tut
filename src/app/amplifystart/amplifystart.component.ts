import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './amplifystart.component.html',
  styleUrls: ['./amplifystart.component.scss']
})
export class AmplifystartComponent implements OnInit {

  pairDeviceForm = this.formBuilder.group({
    oneTimeCode: '',
  });

  constructor(private formBuilder: FormBuilder) { }

  async ngOnInit() {

  }

  async onSubmit(): Promise<void> {
    // Process checkout data here
    const oneTimeCode = this.pairDeviceForm.value.oneTimeCode;
    console.log('calling api');
    const postInput = {
      body: {
        oneTimeCode: oneTimeCode
      },
    };
    const apiRes = await API.post('rmXwordApi', '/pair-device', postInput)
    console.log('apiRes', apiRes);
  }



}
