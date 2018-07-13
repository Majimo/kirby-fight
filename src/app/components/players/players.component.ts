import { Component, OnInit, Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { DataService } from '../../services/data.service';  

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
@Injectable()
export class PlayersComponent implements OnInit {

  players: any;

  constructor(private _playerService: DataService) { }

  ngOnInit() {
    this._playerService.getPlayers().subscribe(playerData => this.players = playerData);
  }

  headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
}
