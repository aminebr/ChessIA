import { Tile } from './tile';
import { Player } from '../player/player';
import { WhitePlayer } from '../player/white-player';
import { BlackPlayer } from '../player/black-player';
import { OccupiedTile } from './occupied-tile';
import { Pawn } from '../pieces/pawn';
import { EmptyTile } from './empty-tile';
import { Rook } from '../pieces/rook';
import { Knight } from '../pieces/knight';
import { Bishop } from '../pieces/bishop';
import { Queen } from '../pieces/queen';
import { King } from '../pieces/king';

export class Board{
    gameBoard: Tile[][]
    nextPlayerToMove : Player
    whitePlayer : WhitePlayer
    blackPlayer : BlackPlayer
    emptyTile : EmptyTile


    constructor(whitePlayer : WhitePlayer,blackPLayer : BlackPlayer){
        this.whitePlayer = whitePlayer
        this.blackPlayer = blackPLayer
        this.nextPlayerToMove = this.whitePlayer
        this.initGameBoard()
        this.arrangeTheBoard()
    }

    getGameBoard(){
        return this.gameBoard
    }
    arrangeTheBoard(){
        

        this.gameBoard[0][0] = new OccupiedTile(new Rook(this.whitePlayer))
        this.gameBoard[1][0] = new OccupiedTile(new Knight(this.whitePlayer))
        this.gameBoard[2][0] = new OccupiedTile(new Bishop(this.whitePlayer))
        this.gameBoard[3][0] = new OccupiedTile(new Queen(this.whitePlayer))
        this.gameBoard[4][0] = new OccupiedTile(new King(this.whitePlayer))
        this.gameBoard[5][0] = new OccupiedTile(new Bishop(this.whitePlayer))
        this.gameBoard[6][0] = new OccupiedTile(new Knight(this.whitePlayer))
        this.gameBoard[7][0] = new OccupiedTile(new Rook(this.whitePlayer))
        this.gameBoard[0][1] = new OccupiedTile(new Pawn(this.whitePlayer))
        this.gameBoard[1][1] = new OccupiedTile(new Pawn(this.whitePlayer))
        this.gameBoard[2][1] = new OccupiedTile(new Pawn(this.whitePlayer))
        this.gameBoard[3][1] = new OccupiedTile(new Pawn(this.whitePlayer))
        this.gameBoard[4][1] = new OccupiedTile(new Pawn(this.whitePlayer))
        this.gameBoard[5][1] = new OccupiedTile(new Pawn(this.whitePlayer))
        this.gameBoard[6][1] = new OccupiedTile(new Pawn(this.whitePlayer))
        this.gameBoard[7][1] = new OccupiedTile(new Pawn(this.whitePlayer))
        this.gameBoard[0][2] = new EmptyTile()
        this.gameBoard[1][2] = new EmptyTile()
        this.gameBoard[2][2] = new EmptyTile()
        this.gameBoard[3][2] = new EmptyTile()
        this.gameBoard[4][2] = new EmptyTile()
        this.gameBoard[5][2] = new EmptyTile()
        this.gameBoard[6][2] = new EmptyTile()
        this.gameBoard[7][2] = new EmptyTile()
        this.gameBoard[0][3] = new EmptyTile()
        this.gameBoard[1][3] = new EmptyTile()
        this.gameBoard[2][3] = new EmptyTile()
        this.gameBoard[3][3] = new EmptyTile()
        this.gameBoard[4][3] = new EmptyTile()
        this.gameBoard[5][3] = new EmptyTile()
        this.gameBoard[6][3] = new EmptyTile()
        this.gameBoard[7][3] = new EmptyTile()
        this.gameBoard[0][4] = new EmptyTile()
        this.gameBoard[1][4] = new EmptyTile()
        this.gameBoard[2][4] = new EmptyTile()
        this.gameBoard[3][4] = new EmptyTile()
        this.gameBoard[4][4] = new EmptyTile()
        this.gameBoard[5][4] = new EmptyTile()
        this.gameBoard[6][4] = new EmptyTile()
        this.gameBoard[7][4] = new EmptyTile()
        this.gameBoard[0][5] = new EmptyTile()
        this.gameBoard[1][5] = new EmptyTile()
        this.gameBoard[2][5] = new EmptyTile()
        this.gameBoard[3][5] = new EmptyTile()
        this.gameBoard[4][5] = new EmptyTile()
        this.gameBoard[5][5] = new EmptyTile()
        this.gameBoard[6][5] = new EmptyTile()
        this.gameBoard[7][5] = new EmptyTile()
        this.gameBoard[0][6] = new OccupiedTile(new Pawn(this.blackPlayer))
        this.gameBoard[1][6] = new OccupiedTile(new Pawn(this.blackPlayer))
        this.gameBoard[2][6] = new OccupiedTile(new Pawn(this.blackPlayer))
        this.gameBoard[3][6] = new OccupiedTile(new Pawn(this.blackPlayer))
        this.gameBoard[4][6] = new OccupiedTile(new Pawn(this.blackPlayer))
        this.gameBoard[5][6] = new OccupiedTile(new Pawn(this.blackPlayer))
        this.gameBoard[6][6] = new OccupiedTile(new Pawn(this.blackPlayer))
        this.gameBoard[7][6] = new OccupiedTile(new Pawn(this.blackPlayer))
        this.gameBoard[0][7] = new OccupiedTile(new Rook(this.blackPlayer))
        this.gameBoard[1][7] = new OccupiedTile(new Knight(this.blackPlayer))
        this.gameBoard[2][7] = new OccupiedTile(new Bishop(this.blackPlayer))
        this.gameBoard[3][7] = new OccupiedTile(new Queen(this.blackPlayer))
        this.gameBoard[4][7] = new OccupiedTile(new King(this.blackPlayer))
        this.gameBoard[5][7] = new OccupiedTile(new Bishop(this.blackPlayer))
        this.gameBoard[6][7] = new OccupiedTile(new Knight(this.blackPlayer))
        this.gameBoard[7][7] = new OccupiedTile(new Rook(this.blackPlayer))
    }
    
    
    initGameBoard(){
        this.gameBoard = [];
        for(var i = 0 ; i < 8  ; i++) {
            this.gameBoard[i] = [];

        }
    }
}