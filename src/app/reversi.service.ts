import { Injectable, computed, signal, Component } from '@angular/core';
import {GameState, ReversiModelInterface, TileCoords, BoardtoString} from '../app/data/reversi.definitions'
import { initialGameState, tryPlay } from './data/reversi.game';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class ReversiService implements ReversiModelInterface {
  constructor() { }
  private readonly _sigGameState = signal<GameState>(initialGameState) ;
  public readonly sigGameState = computed<GameState>(
    () => {
      return this._sigGameState() ;
    }
  );

  play(coord: TileCoords): void {
    tryPlay(this._sigGameState(),coord[0],coord[1]) ;
  }

  restart(): void {
    this._sigGameState.set(initialGameState) ;
  }

}

// export class AppComponent {
//  import { BoardtoString } from "./data/reversi.definitions"; 
// }
