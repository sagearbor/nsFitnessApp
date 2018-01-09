import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User, Gift, Group} from "../models";
import {FirebaseService} from '../services';
import {prompt} from "ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { BackendService } from "../services/backend.service";
import firebase = require("nativescript-plugin-firebase");
import { DatePicker } from "ui/date-picker";
import { EventData } from "data/observable";

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
  username: string;
  fName: string;
  lName: string;
  dobYYYY: string;
  dobMM: string;
  dobDD: string;
  dobInMilliseconds: number;
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

    onPickerLoaded(args) {
        let datePicker = <DatePicker>args.object;
        datePicker.year = 2010;
        datePicker.month = 6;
        datePicker.day = 6;
        datePicker.minDate = new Date(1940, 0, 1);
        datePicker.maxDate = new Date(2025, 12, 30);
        }
    onDateChanged(args) {
        console.log("Date changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
        this.user.dobInMilliseconds = args.value;
        }
    onDayChanged(args) {
        console.log("Day changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
        this.user.dobDD = args.value;
        }
    onMonthChanged(args) {
        console.log("Month changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
        this.user.dobMM = args.value;
        }
    onYearChanged(args) {
        console.log("Year changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
        this.user.dobYYYY = args.value;
        }



  signUp() {
    console.log("GOT HEREE 1212 < ------------- " + JSON.stringify(this.user));  
    console.log("GOT HEREE 1222 < ------------- " + JSON.stringify(this.user));  
    /**   */
    let newUser = {email: this.user.email , userUID: BackendService.token , fName: this.user.fName , lName: this.user.lName , dob: Date.now() , gender: this.user.gender , weight: this.user.weight , goalWeight: this.user.goalWeight , favActivity: this.user.favActivity };
    
    console.log("GOT HEREE 2121 < ------------- ");
    this.firebaseService.register(this.user)
      .then(() => {
        this.isAuthenticating = false;
        this.toggleDisplay();
	/**  */  
	console.log("7777777777777777777777777" + JSON.stringify(this.user));  
	console.log("77777" + JSON.stringify(newUser));  
	console.log("67777777777777777777777777" + JSON.stringify(this.user));  
	})
      .catch((message:any) => {
        alert(message);
        this.isAuthenticating = false;
	});
 
	/**  DONT INCLUDE AN ERROR MESSAGE OR IT OVERRIDES THE FB ERROR MESSAGE IF USER EMAIL ALREADY CREATED  
	this.firebaseService.addNewUser(newUser.email,newUser.userUID,newUser.fName,newUser.lName,newUser.dob,newUser.gender,newUser.weight,newUser.goalWeight,newUser.favActivity)
	;   
	   .then((message:any) => {alert(message);})
	   */
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
