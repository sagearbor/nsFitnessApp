import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Page} from "ui/page";
import {BackendService, FirebaseService} from "../services";
import {Gift} from "../models";
import {Group} from "../models";
import {RouterExtensions} from 'nativescript-angular/router/router-extensions';
import {Router} from '@angular/router';
import { SelectedIndexChangedEventData, ValueList } from "nativescript-drop-down";
 

@Component({
  moduleId: module.id,
  selector: "al-moveALCreate",
  templateUrl: "moveALCreate.html"
})

export class MoveALCreateComponent implements OnInit {
  id: string;
  name: string;
  date: string;
  description: string;
  domainname: string;
  privacy: string;
  members: string;
  UID: string;
  public gift: Gift;
  public group: Group;

  public privac: number = null;
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
  this.items.push({value: `open`, display: `OPEN to world`} , {value: `closed`, display: `CLOSED - invite only group`});
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
      this.date,
      this.description,
      this.domainname,
      this.privacy,
      this.members,
      this.UID)
    let groupName:string = this.group.name;
    let groupDescription:string = this.group.description;
    let groupDomainname:string = this.group.domainname;
    let groupPrivacy:string = this.group.privacy;
    this.firebaseService.addGroup(groupName,groupDescription,groupDomainname,groupPrivacy).then((message:any) => {
      this.name = "";
      this.description = "";
      this.domainname = "";
      this.privacy = "";
      alert(message);
    })
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

