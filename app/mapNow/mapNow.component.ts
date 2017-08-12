import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Page} from "ui/page";
import {BackendService, FirebaseService} from "../services";
import {Gift} from "../models";
import {RouterExtensions} from 'nativescript-angular/router/router-extensions';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: "gf-mapNow",
  templateUrl: "mapNow.html"
})
export class MapNowComponent implements OnInit {

  id: string;
  name: string;
  date: string;
  description: string;
  imagepath: string;
  UID: string;
  public gift: Gift;

  public gifts$: Observable<any>;
  public message$: Observable<any>;
  
  constructor(private routerExtensions: RouterExtensions,
    private firebaseService: FirebaseService,
    private router: Router
    ) {}

ngOnInit(){
  this.gifts$ = <any>this.firebaseService.getMyWishList();
  this.message$ = <any>this.firebaseService.getMyMessage();
}

  add() {
     this.gift = new Gift(
      this.id,
      this.name,
      this.date,
      this.description,
      this.imagepath,
      this.UID)
    let myGift:string = this.gift.name;
    this.firebaseService.add(myGift).then((message:any) => {
      this.name = "";
      alert(message);
    })   
    
  }

  delete(gift: Gift) {
    this.firebaseService.delete(gift)
      .catch(() => {
        alert("An error occurred while deleting an item from your list.");
      });
  }

  goToEatAL(){
    this.routerExtensions.navigate(["/eatAL"], { clearHistory: true } );
  }

  goToGameAL(){
    this.routerExtensions.navigate(["/gameAL"], { clearHistory: true } );
  }

  goToMoveAL(){
    this.routerExtensions.navigate(["/moveAL"], { clearHistory: true } );
  }

  goToThinkAL(){
    this.routerExtensions.navigate(["/thinkAL"], { clearHistory: true } );
  }

  logout() {
    this.firebaseService.logout();
    this.routerExtensions.navigate(["/login"], { clearHistory: true } );
  }
}

