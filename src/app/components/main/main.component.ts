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
  playerLife: number;
  ennemyLife: number;

  constructor() {
  }

  giveRandomKey(userKey) {
    this.playerLife = parseInt(document.getElementById("life-player1").innerHTML);
    this.ennemyLife = parseInt(document.getElementById("life-player2").innerHTML);
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
      document.getElementById("life-player2").innerHTML = (this.ennemyLife - 1).toString();
      console.log("Secondes écoulées : " + millis / 10);
      console.log("Vous avez pressé la lettre : " + this.userValue.toUpperCase());
      console.log("Gagné !");
    }
    else {
      document.getElementById("life-player1").innerHTML = (this.playerLife - 1).toString();
      console.log("Secondes écoulées : " + millis / 10);
      console.log("Vous avez pressé la lettre : " + this.userValue.toUpperCase());
      console.log("Perdu !");
    }
  }

}
