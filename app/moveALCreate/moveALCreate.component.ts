import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Page} from "ui/page";
import {BackendService, FirebaseService} from "../services";
import {Gift} from "../models";
import {Group} from "../models";
import {RouterExtensions} from 'nativescript-angular/router/router-extensions';
import {Router} from '@angular/router';
 
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

