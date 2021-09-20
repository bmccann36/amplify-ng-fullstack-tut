import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  currentStep = 1
  stepOneState = 'tab-pane active';
  stepTwoState = 'tab-pane fade'
  ngOnInit() {

  }

  // advanceStep(stepToGoTo: number) {
  //   console.log("advance called with ", stepToGoTo);
  //   this.currentStep = stepToGoTo;
  // }
  shouldShowStep(stepNo: number) {
    return this.currentStep == stepNo;
  }
  advanceButtonClicked() {
    this.currentStep++;
    console.log('currentStep :>> ', this.currentStep);
    this.stepOneState = 'tab-pane fade';
    this.stepTwoState = 'tab-pane active'
  }
  // stepOneState(){
  //   return ['tab-pane', 'active']
  // }
  // stepTwoState(){
  //   console.log('step two state called');
  //   if(this.currentStep == 2){
  //     return ['tab-pane', 'active']
  //   }else{
  //     return 'tab-pane'
  //   }
  // }
}
