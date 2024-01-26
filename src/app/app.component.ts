import { ChangeDetectionStrategy, Component, Signal, computed, signal } from '@angular/core';
import { ReversiService } from './reversi.service';
import { BoardtoString, TileCoords } from './data/reversi.definitions';
import { whereCanPlay } from './data/reversi.game';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  // Publie des string qui représente le plateau de jeu
  readonly strBoard: Signal<string>;
  readonly coupsPossibles: Signal<readonly TileCoords[]>;

  constructor(private S: ReversiService) {
    this.strBoard = computed(
      () => BoardtoString( S.sigGameState().board )
    )

    this.coupsPossibles = computed(
      () => whereCanPlay( S.sigGameState() )
    )
  }

  playAt(c: TileCoords): void {
    this.S.play(c);
  }

}
