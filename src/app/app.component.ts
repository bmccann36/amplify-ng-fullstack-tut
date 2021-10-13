import { SignupModalComponent } from './signup-modal/signup-modal.component';
import { Component, OnInit } from '@angular/core';
import Auth, { CognitoUser } from '@aws-amplify/auth';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserState } from './../types/Constants';
import { LoginModalComponent } from './login-modal/login-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  userLoginState?: UserState; //todo maybe this initial state shoud be different
  collapse = true;
  items = [1, 2, 3]; // used for demo dropdown
  isCollapsed = true;
  loginModalRef!: BsModalRef;
  signUpModalRef!: BsModalRef;
  constructor(
    private modalService: BsModalService,
  ) { }

  async ngOnInit() {
    let fetchedUser: CognitoUser | false = false;
    try {
      fetchedUser = await Auth.currentAuthenticatedUser()
    } catch (fetchUserErr) {
      console.log('user not fetched');
      this.userLoginState = UserState.LOGGED_OUT;
    }
    // console.log('userOrNull :>> ', fetchedUser);
    if (fetchedUser) {
      console.log('user is logged in');
      this.userLoginState = UserState.LOGGED_IN;
    }
  }

  async handleLogInOut() {
    console.log('handle log in/out clicked current login state is');
    console.log(this.userLoginState);
    if (this.userLoginState == UserState.LOGGED_IN) {
      const signOutRes = await Auth.signOut();
      this.userLoginState = UserState.LOGGED_OUT;
    }
    else { // user not logged in
      this.loginModalRef = this.modalService.show(LoginModalComponent);
      // subscribe to event emitted by child modal that this comp. launches
      this.loginModalRef.content.userLoggedInEvent.subscribe((newLoginState: UserState) => {
        console.log('Child component\'s event was triggered');
        this.userLoginState = newLoginState
      });
      // subscribe to event where user decides they actually want to sign up not in
      this.loginModalRef.content.userWantsSignUp.subscribe(()=>{
        console.log("user nav away from login modal to signup");
        this.handleSignUp()
      })
    }
  }

  async handleSignUp(){
    this.signUpModalRef = this.modalService.show(SignupModalComponent);
  }

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }




}
