import { Component } from '@angular/core';

@Component({
  selector: 'fight-result',
  templateUrl: './fight-result.component.html',
  styleUrls: ['./fight-result.component.scss']
})
export class FightResultComponent {

  fightResult;

  constructor() {
    this.fightResult = document.getElementById("fight-result");
  }

  playerWin(millis, userValue) {
    this.fightResult.innerHTML = "Secondes écoulées : " + millis / 10 + "<br>";
    this.fightResult.innerHTML += "Vous avez pressé la lettre : " + userValue.toUpperCase() + "<br>";
    this.fightResult.innerHTML += "L'ennemi perd un point de vie !";
  }

  ennemyWin(millis, userValue) {
    this.fightResult.innerHTML = "Secondes écoulées : " + millis / 10 + "<br>";
    this.fightResult.innerHTML += "Vous avez pressé la lettre : " + userValue.toUpperCase() + "<br>";
    this.fightResult.innerHTML += "Vous perdez un point de vie !";
  }

}
