import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User, Gift, Group} from "../models";
import {FirebaseService} from '../services';
import {prompt} from "ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { BackendService } from "../services/backend.service";
import firebase = require("nativescript-plugin-firebase");

@Component({
  moduleId: module.id,
  selector: 'al-login',
  templateUrl: 'login.html'
})

export class LoginComponent {
  isLoggingIn = true;
  isAuthenticating = false;
  userUID: string;
  email: string;
  password: string;
  fName: string;
  lName: string;
  dob: number;
  gender: string;
  weight: string;
  goalWeight: string;
  favActivity: string;

  user: User;

  constructor(private firebaseService: FirebaseService,
              private routerExtensions: RouterExtensions
            ) {
              this.user = new User();
              this.user.email = "sagearbor+ALguest@sagearbor.com";
	      this.user.password = "Password";
            }
 
 submit() {
    this.isAuthenticating = true;
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
     this.firebaseService.login(this.user)
      .then(() => {
        this.isAuthenticating = false;
        this.routerExtensions.navigate(["/"], { clearHistory: true } );

      })
      .catch((message:any) => {
        this.isAuthenticating = false;
      });
  }

  signUp() {
  
    this.firebaseService.register(this.user)
      .then(() => {
        this.isAuthenticating = false;
        this.toggleDisplay();
      })
      .catch((message:any) => {
        alert(message);
        this.isAuthenticating = false;
	});

        let newUser = {email: this.user.email , userUID: BackendService.token , fName: this.user.fName , lName: this.user.lName , dob: Date.now() , gender: this.user.gender , weight: this.user.weight , goalWeight: this.user.goalWeight , favActivity: this.user.favActivity };

    this.firebaseService.addNewUser(newUser.email,newUser.userUID,newUser.fName,newUser.lName,newUser.dob,newUser.gender,newUser.weight,newUser.goalWeight,newUser.favActivity).then((message:any) => {
      alert(message);
    })
  }
 
  forgotPassword() {
    prompt({
      title: "Forgot Password",
      message: "Enter the email address you used to register for ArborLife to reset your password.",
      defaultText: "",
      okButtonText: "Ok",
      cancelButtonText: "Cancel"
    }).then((data) => {
      if (data.result) {
        this.firebaseService.resetPassword(data.text.trim())
          .then((result:any) => {
            if(result){
              alert(result);
            }
         });
      }
    });
  }
  
toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
