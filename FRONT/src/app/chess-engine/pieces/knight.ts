import { Piece } from './piece';
import { PieceType } from './piece-type.enum';
import { Board } from '../board/board';
import { Move } from '../move/move';
import { Player } from '../player/player';
import { WhitePlayer } from '../player/white-player';

export class Knight extends Piece{

    constructor(pieceBelongsTo : Player){
        super(pieceBelongsTo,PieceType.Knight,true)
        if(pieceBelongsTo instanceof WhitePlayer)
            this.pieceLink = "assets/Chess_nlt45.svg"
        else this.pieceLink = "assets/Chess_ndt45.svg"
    }

    calculateLegalMoves(board: Board , x : number , y :number) {
        let gameBoard = board.getGameBoard()
        if(x+1 >= 0 && x+1 < 8 && y+2 >= 0 && y+2 < 8 )
            gameBoard[x+1][y+2].setColor("green")

        if(x+1 >= 0 && x+1 < 8 && y+2 >= 0 && y+2 < 8 )
            gameBoard[x-1][y+2].setColor("green")

        if(x+1 >= 0 && x+1 < 8 && y-2 >= 0 && y-2 < 8 )
            gameBoard[x+1][y-2].setColor("green")

        if(x-1 >= 0 && x-1 < 8 && y-2 >= 0 && y-2 < 8 )
            gameBoard[x-1][y-2].setColor("green")

        if(x+2 >= 0 && x+2 < 8 && y+1 >= 0 && y+1 < 8 )
            gameBoard[x+2][y+1].setColor("green")

        if(x-2 >= 0 && x-2 < 8 && y+1 >= 0 && y+1 < 8 )
            gameBoard[x-2][y+1].setColor("green")

        if(x-2 >= 0 && x-2 < 8 && y-1 >= 0 && y-1 < 8 )
            gameBoard[x-2][y-1].setColor("green")

        if(x+2 >= 0 && x+2 < 8 && y-1 >= 0 && y-1 < 8 )
            gameBoard[x+2][y-1].setColor("green")
    }    
    
    
    movePiece(move: Move) {
        throw new Error("Method not implemented.");
    }
}