import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  randomNumber: number;
  randomKey: string;
  userValue: string;

  constructor() {
  }

  giveRandomKey(userKey) {
    userKey.value = null;
    this.randomNumber = Math.floor(Math.random() * 26) + 65;
    this.randomKey = String.fromCharCode(this.randomNumber);
    userKey.focus();
  }

  getUserKey(event: any) { 
    this.userValue = event.target.value;
    console.log(this.userValue.toUpperCase());
    console.log(this.randomKey);
    if (this.userValue.toUpperCase() === this.randomKey) {
      console.log("Gagné !");
    }
  }

}
