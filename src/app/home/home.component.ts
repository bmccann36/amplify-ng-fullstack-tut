import { PairingState } from './../../types/Constants';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(


  ) { }

  ngOnInit(): void {
    const apiName = 'rmXwordApi';
    const path = '/user-info';

    const userInfoResponse = API.get(apiName, path, {})
    console.log(userInfoResponse);


  }

}
