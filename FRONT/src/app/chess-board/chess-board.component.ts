import { Component, OnInit } from '@angular/core';
import { Board } from '../chess-engine/board/board';
import { Tile } from '../chess-engine/board/tile';
import { EmptyTile } from '../chess-engine/board/empty-tile';
import { Player } from '../chess-engine/player/player';
import { WhitePlayer } from '../chess-engine/player/white-player';
import { BlackPlayer } from '../chess-engine/player/black-player';

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
  waitingForSource : boolean
  playerTurn : Player
  whitePlayer : WhitePlayer
  blackPlayer : BlackPlayer
  constructor() { }

  ngOnInit( ) {
    this.whitePlayer= new WhitePlayer()
    this.blackPlayer = new BlackPlayer()
    this.board= new Board(this.whitePlayer,this.blackPlayer) 
    this.gameBoard = this.board.getGameBoard()
    this.waitingForSource = true
    this.playerTurn = this.whitePlayer
  }

  triggerChangeState(x : number , y : number){
    
    if(this.tileXcoordinate == null && this.tileYcoordinate == null && this.waitingForSource && this.gameBoard[x][y].isOccupied() && this.gameBoard[x][y].getPiece().getPieceBelongsTo() == this.playerTurn ){
      this.tileXcoordinate = x
      this.tileYcoordinate = y
      this.gameBoard[x][y].setColor("yellow")
      this.gameBoard[x][y].getPiece().calculateLegalMoves(this.board,x,y)
    }
    if(this.tileXcoordinate != null && this.tileYcoordinate != null && !this.waitingForSource && this.gameBoard[x][y].getColor() == "green" ){
      this.gameBoard[x][y] = this.gameBoard[this.tileXcoordinate][this.tileYcoordinate]
      this.gameBoard[this.tileXcoordinate][this.tileYcoordinate] = new EmptyTile()
      this.tileXcoordinate = null
      this.tileYcoordinate = null
      this.gameBoard[x][y].setColor("white")
      this.gameBoard[x][y].getPiece().makeFirstMove()
      if(this.playerTurn == this.whitePlayer)  this.playerTurn = this.blackPlayer
      else this.playerTurn = this.whitePlayer
      this.gameBoard.forEach((row ) => { row.forEach(element => {
        element.setColor("white")
      });} ) 
      }
      this.waitingForSource = !this.waitingForSource
  }


}
