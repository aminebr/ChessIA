import { Piece } from './piece';
import { PieceType } from './piece-type.enum';
import { Board } from '../board/board';
import { Move } from '../move/move';
import { Player } from '../player/player';
import { WhitePlayer } from '../player/white-player';

export class Queen extends Piece{

    constructor(pieceBelongsTo : Player){
        super(pieceBelongsTo,PieceType.Queen,true)
        if(pieceBelongsTo instanceof WhitePlayer)
            this.pieceLink = "assets/Chess_qlt45.svg"
        else this.pieceLink = "assets/Chess_qdt45.svg"
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
        
            i = x
            j = y
            while(i >= 0 && i < 8 && j >= 0 && j < 8 ){
                
                gameBoard[i][j].setColor("green")
                i++

            }
            i = x
            j = y
            while(i >= 0 && i < 8 && j >= 0 && j < 8 ){
                
                gameBoard[i][j].setColor("green")
                i--
            }
            i = x
            j = y
            while(i >= 0 && i < 8 && j >= 0 && j < 8 ){
                
                gameBoard[i][j].setColor("green")
                j--
            }
            i = x
            j = y
            while(i >= 0 && i < 8 && j >= 0 && j < 8 ){
                
                gameBoard[i][j].setColor("green")
                j++
            }
    }      
    
    
    movePiece(move: Move) {
        throw new Error("Method not implemented.");
    }
}