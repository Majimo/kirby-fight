import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  static start: number;
  randomNumber: number;
  randomKey: string;
  userValue: string;

  constructor() {
  }

  giveRandomKey(userKey) {
    MainComponent.start = Date.now();
    userKey.value = null;
    this.randomNumber = Math.floor(Math.random() * 26) + 65;
    this.randomKey = String.fromCharCode(this.randomNumber);
    userKey.focus();
  }

  getUserKey(event: any) {
    var millis = Math.floor((Date.now() - MainComponent.start) / 100);
    this.userValue = event.target.value;
    if (this.userValue.toUpperCase() === this.randomKey && millis <= 20) {
      console.log("Secondes écoulées : " + millis / 10);
      console.log("Vous avez pressé la lettre : " + this.userValue.toUpperCase());
      console.log("Gagné !");
    }
    else {
      console.log("Secondes écoulées : " + millis / 10);
      console.log("Vous avez pressé la lettre : " + this.userValue.toUpperCase());
      console.log("Perdu !");
    }
  }

}
