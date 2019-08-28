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
  tileXcoordinate : number
  tileYcoordinate : number
  
  constructor() { }

  ngOnInit( ) {
    this.board= new Board() 
    this.gameBoard = this.board.getGameBoard()
  }

  triggerChangeState(x : number , y : number){

    if(this.tileXcoordinate == null){
      this.tileXcoordinate = x
      this.tileYcoordinate = y
      }
    else{
      this.gameBoard[x][y] = this.gameBoard[this.tileXcoordinate][this.tileYcoordinate]
      this.gameBoard[this.tileXcoordinate][this.tileYcoordinate] = EmptyTile.getEmptyTileInstance()
      this.tileXcoordinate = null
      this.tileYcoordinate = null
      }
  }
}
