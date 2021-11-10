import { Component, OnInit } from '@angular/core';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './amplifystart.component.html',
  styleUrls: ['./amplifystart.component.scss']
})
export class AmplifystartComponent implements OnInit {


  constructor() { }

  async ngOnInit() {

  }

  async callApi() {
    console.log('calling api');


    const apiRes = await API.post('rmXwordApi', '/pair-device', null)
    console.log('apiRes', apiRes);

  }

}
