import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
/* new form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmplifystartComponent } from './amplifystart/amplifystart.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { GridDemoComponent } from './grid-demo/grid-demo.component';
import { PairDeviceComponent } from './pair-device/pairDevice.component';
import { ConfirmSingupModalComponent } from './confirm-singup-modal/confirm-singup-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LoginModalComponent } from './login-modal/login-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    AmplifystartComponent,
    GridDemoComponent,
    PairDeviceComponent,
    ConfirmSingupModalComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* configure app with AmplifyUIAngularModule */
    AmplifyUIAngularModule,
    /* configuring form modules */
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
