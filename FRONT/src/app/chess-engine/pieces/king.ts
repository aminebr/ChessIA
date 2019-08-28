import { Piece } from './piece';
import { PieceType } from './piece-type.enum';
import { Board } from '../board/board';
import { Move } from '../move/move';
import { Player } from '../player/player';
import { WhitePlayer } from '../player/white-player';

export class King extends Piece{

    constructor(pieceBelongsTo : Player){
        super(pieceBelongsTo,PieceType.King,true)
        if(pieceBelongsTo instanceof WhitePlayer)
            this.pieceLink = "assets/Chess_klt45.svg"
        else this.pieceLink = "assets/Chess_kdt45.svg"
    }

    calculateLegalMoves(board: Board , x : number , y :number) {
        let gameBoard = board.getGameBoard()
        if(x >= 0 && x < 8 && y+1 >= 0 && y+1 < 8 )
            gameBoard[x][y+1].setColor("green")

        if(x >= 0 && x < 8 && y-1 >= 0 && y-1 < 8 )
            gameBoard[x][y-1].setColor("green")

        if(x+1 >= 0 && x+1 < 8 && y >= 0 && y < 8 )
            gameBoard[x+1][y].setColor("green")

        if(x-1 >= 0 && x-1 < 8 && y >= 0 && y < 8 )
            gameBoard[x-1][y].setColor("green")

        if(x+1 >= 0 && x+1 < 8 && y+1 >= 0 && y+1 < 8 )
            gameBoard[x+1][y+1].setColor("green")

        if(x-1 >= 0 && x-1 < 8 && y-1 >= 0 && y-1 < 8 )
            gameBoard[x-1][y-1].setColor("green")

        if(x+1 >= 0 && x+1 < 8 && y-1 >= 0 && y-1 < 8 )
            gameBoard[x+1][y-1].setColor("green")

        if(x-1 >= 0 && x-1 < 8 && y+1 >= 0 && y+1 < 8 )
            gameBoard[x-1][y+1].setColor("green")

    }    
    
    
    movePiece(move: Move) {
        throw new Error("Method not implemented.");
    }
}