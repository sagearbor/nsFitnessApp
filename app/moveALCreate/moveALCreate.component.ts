import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Page} from "ui/page";
import {BackendService, FirebaseService} from "../services";
import {Gift} from "../models";
import {Group} from "../models";
import {RouterExtensions} from 'nativescript-angular/router/router-extensions';
import {Router} from '@angular/router';
import { SelectedIndexChangedEventData, ValueList } from "nativescript-drop-down";
import firebase = require("nativescript-plugin-firebase"); 


@Component({
  moduleId: module.id,
  selector: "al-moveALCreate",
  templateUrl: "moveALCreate.html"
})

export class MoveALCreateComponent implements OnInit {
  id: string;
  name: string;
  dateInMilliseconds: string;
  description: string;
  domainname: string;
  members: string;
  admins: string;
  UID: string;
  public gift: Gift;
  public group: Group;

  public privacy: string;
  public hint                  = "Choose Group permissions";
  public items: ValueList<string>;
  public cssClass: string      = "default";


  public gifts$: Observable<any>;
  public groups$: Observable<any>;
  public message$: Observable<any>;
  
  constructor(private routerExtensions: RouterExtensions,
    private firebaseService: FirebaseService,
    private router: Router
    ) {}

ngOnInit(){
  this.gifts$ = <any>this.firebaseService.getMyWishList();
  this.groups$ = <any>this.firebaseService.getMyGroupList();
  this.message$ = <any>this.firebaseService.getMyMessage();
  this.items = new ValueList<string>();
  this.items.push({value: 'notSet', display: 'SET privacy'}, {value: `open1`, display: `OPEN to world`} , {value: `closed`, display: `CLOSED - invite only group`});
  }

    public onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}. New value is "${this.items.getValue(
            args.newIndex)}"`);
    }

    public onopen() {
        console.log("Drop Down opened.");
    }

    public onclose() {
        console.log("Drop Down closed.");
    }

    public changeStyles() {
        this.cssClass = "changed-styles";
    }



  addGroup() {
     this.group = new Group(
      this.id,
      this.name,
      this.dateInMilliseconds,
      this.description,
      this.domainname,
      this.privacy,
      this.members,
      this.admins,
      this.UID) 
    this.group.admins = BackendService.token;
    this.group.members = BackendService.token;
    let groupAdmins:string = this.group.admins;
    let groupMembers:string = this.group.members;
    let groupName:string = this.group.name;
    let groupDescription:string = this.group.description;
    let groupDomainname:string = this.group.domainname;
    let groupPrivacy = "open";
    this.privacy = "oPenNOTUSED-setThisPrviacy";
    this.firebaseService.addGroup(groupName,groupDescription,groupDomainname,groupPrivacy,groupAdmins,groupMembers).then((message:any) => {
      this.name = "";
      this.description = "";
      this.domainname = "";
      this.privacy = "oPenFIX-InAddGroupCall";
      alert(message);
      })
    console.log("GOT HEREE < ------------- ");
    console.log(this.group);
    console.log("GOT HEREE 22 < ------------- ");
    console.log(JSON.stringify(this.group));
    console.log("GOT HEREE 333 < ------------- ");
    firebase.getCurrentUser().then(user => {
      console.log(JSON.stringify("sageee uid --> " + user.uid + " - email --> " + user.email));
      alert("User uid from FB: " + user.uid);
        }, error => {
      alert("Trouble in paradise: " + error);
    });
    console.log("GOT HEREE 4444 < ------------- ");
    console.log(JSON.stringify(this.privacy));
    console.log("GOT HEREE 55555 < ------------- ");
    console.log(JSON.stringify(this.privacy));
    console.log("GOT HEREE 666666 < ------------- ");


  }

  delete(gift: Gift) {
    this.firebaseService.delete(gift)
    .catch(() => {
        alert("An error occurred while deleting an item from your list.");
      });
  }

  goToMoveAL(){
    this.routerExtensions.navigate(["/moveAL"], { clearHistory: true } );
  }

  goToMapNowAL(){
    this.routerExtensions.navigate(["/"], { clearHistory: true } );
  }

  goToMoveALCreate(){
    this.routerExtensions.navigate(["/moveALCreate"], { clearHistory: true } );
  }

  logout() {
    this.firebaseService.logout();
    this.routerExtensions.navigate(["/login"], { clearHistory: true } );
  }
}

