import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from '../../../services/game.service';
import { Game } from '../../../models/game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnDestroy {

  games: Game[];

  constructor(private gameService : GameService) { }

  ngOnInit() : void {
    this.games = this.gameService.getGames();

    this.gameService.dataSub.subscribe(
      (data: Game[]) => { this.games = data; }
    );
  }

  ngOnDestroy() {
    this.gameService.dataSub.unsubscribe();
  }

}
