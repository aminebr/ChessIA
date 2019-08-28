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

    calculateLegalMoves(board: Board) {
        throw new Error("Method not implemented.");
    }    
    
    
    movePiece(move: Move) {
        throw new Error("Method not implemented.");
    }
}