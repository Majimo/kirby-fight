import { Component } from '@angular/core';

@Component({
  selector: 'fight-result',
  templateUrl: './fight-result.component.html',
  styleUrls: ['./fight-result.component.scss']
})
export class FightResultComponent {

  constructor() { }

  playerWin(millis, userValue) {
    document.getElementById("fight-result").innerHTML = "L'ennemi perd un point de vie !";
    console.log("Secondes écoulées : " + millis / 10);
    console.log("Vous avez pressé la lettre : " + userValue.toUpperCase());
    console.log("L'ennemi perd un point de vie !");
  }

  ennemyWin(millis, userValue) {
    document.getElementById("fight-result").innerHTML = "Vous perdez un point de vie !";
    console.log("Secondes écoulées : " + millis / 10);
    console.log("Vous avez pressé la lettre : " + userValue.toUpperCase());
    console.log("Vous perdez un point de vie !");
  }

}
