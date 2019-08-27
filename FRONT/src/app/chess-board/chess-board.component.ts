import { Component, OnInit } from '@angular/core';
import { Board } from '../chess-engine/board/board';
import { Tile } from '../chess-engine/board/tile';
import { EmptyTile } from '../chess-engine/board/empty-tile';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {

  board : Board
  gameBoard : Tile[][]
  
  
  constructor() { }

  ngOnInit( ) {
    this.board= new Board() 
    this.gameBoard = this.board.getGameBoard()
  }

  triggerChangeState(){
    this.gameBoard[4][4] = this.gameBoard[1][1];
    this.gameBoard[1][1]= EmptyTile.getEmptyTileInstance();

  }
}
