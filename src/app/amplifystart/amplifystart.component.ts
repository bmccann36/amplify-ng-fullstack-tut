import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Restaurant } from 'src/types/Restaurant';
import { APIService } from '../API.service';

@Component({
  selector: 'app-root',
  templateUrl: './amplifystart.component.html',
  styleUrls: ['./amplifystart.component.scss']
})
export class AmplifystartComponent implements OnInit {
  title = 'amplify-angular-app';
  public createForm!: FormGroup;
  restaurants!: Array<Restaurant>;

  constructor(private api: APIService, private fb: FormBuilder) { }

  async ngOnInit() {
    this.createForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'city': ['', Validators.required]
    });

  }

}
