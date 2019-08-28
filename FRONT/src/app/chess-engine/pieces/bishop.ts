import { Piece } from './piece';
import { PieceType } from './piece-type.enum';
import { Board } from '../board/board';
import { Move } from '../move/move';
import { Player } from '../player/player';
import { WhitePlayer } from '../player/white-player';

export class Bishop extends Piece{

    constructor(pieceBelongsTo : Player){
        super(pieceBelongsTo,PieceType.Bishop,true)
        if(pieceBelongsTo instanceof WhitePlayer)
            this.pieceLink = "assets/Chess_blt45.svg"
        else this.pieceLink = "assets/Chess_bdt45.svg"
    }

    calculateLegalMoves(board: Board , x : number , y :number) {
        let gameBoard = board.getGameBoard()
        
            let i : number = x
            let j : number = y
            while(i >= 0 && i < 8 && j >= 0 && j < 8 ){
                
                gameBoard[i][j].setColor("green")
                i++
                j++
            }
            i = x
            j = y
            while(i >= 0 && i < 8 && j >= 0 && j < 8 ){
                
                gameBoard[i][j].setColor("green")
                i--
                j++
            }
            i = x
            j = y
            while(i >= 0 && i < 8 && j >= 0 && j < 8 ){
                
                gameBoard[i][j].setColor("green")
                i--
                j--
            }
            i = x
            j = y
            while(i >= 0 && i < 8 && j >= 0 && j < 8 ){
                
                gameBoard[i][j].setColor("green")
                i++
                j--
            }
        
        
    }      
    
    
    movePiece(move: Move) {
        throw new Error("Method not implemented.");
    }
}