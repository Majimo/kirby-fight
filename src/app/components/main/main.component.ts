import { Component } from '@angular/core';
import { FightResultComponent } from '../fight-result/fight-result.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [FightResultComponent],
})
export class MainComponent {
  static start: number;
  randomNumber: number;
  randomKey: string;
  countDown: string;
  userValue: string;
  playerLife: number;
  ennemyLife: number;

  constructor(public fightResult: FightResultComponent) {
  }

  giveRandomKey(userKey) {
    this.playerLife = parseInt(document.getElementById("life-player1").innerHTML);
    this.ennemyLife = parseInt(document.getElementById("life-player2").innerHTML);

    // Reset timer and userKey
    MainComponent.start = Date.now();
    this.setCountDown(MainComponent.start);
    userKey.value = null;

    // Select a random key
    this.randomNumber = Math.floor(Math.random() * 26) + 65;
    this.randomKey = String.fromCharCode(this.randomNumber);
    userKey.focus();
  }

  getUserKey(event: any) {
    var millis = Math.floor((Date.now() - MainComponent.start) / 100);
    this.userValue = event.target.value;
    if (this.userValue.toUpperCase() === this.randomKey && millis <= 20) {
      document.getElementById("life-player2").innerHTML = (this.ennemyLife - 1).toString();
      this.fightResult.playerWin(millis, this.userValue);
    }
    else {
      document.getElementById("life-player1").innerHTML = (this.playerLife - 1).toString();
      this.fightResult.ennemyWin(millis, this.userValue);
    }
  }

  setCountDown(time) {
    var x = setInterval(function() {
      var passed = time - Date.now();
      var millis = - Math.floor((passed / 100));
      this.countDown = (millis / 10) + "s...";
      var element = document.getElementById("timePassed");
      element.innerHTML = this.countDown;

      if (millis >= 20) {
        element.setAttribute("style", "color:orange");
      }
      if (millis >= 30) {
        element.setAttribute("style", "color:red");
      }
    }, 100);
  }
}
