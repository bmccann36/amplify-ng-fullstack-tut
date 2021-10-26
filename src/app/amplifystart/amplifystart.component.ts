import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { API } from 'aws-amplify';
import { Restaurant } from 'src/types/Restaurant';
import { APIService } from '../API.service';

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


    // return API.get(apiName, path, myInit);
    const apiRes = await API.post('rmXwordApi', '/pair-device', null)
    console.log('apiRes', apiRes);

  }

}
