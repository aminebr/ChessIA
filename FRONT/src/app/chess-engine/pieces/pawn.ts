import { Piece } from './piece';
import { Board } from '../board/board';
import { Move } from '../move/move';
import { Player } from '../player/player';
import { PieceType } from './piece-type.enum';
import { WhitePlayer } from '../player/white-player';

export class Pawn extends Piece{


    
    constructor(pieceBelongsTo : Player){
        super(pieceBelongsTo,PieceType.Pawn,true)
        if(pieceBelongsTo instanceof WhitePlayer)
            this.pieceLink = "assets/Chess_plt45.svg"
        else this.pieceLink = "assets/Chess_pdt45.svg"
    }

    calculateLegalMoves(board: Board) {
        throw new Error("Method not implemented.");
    }    
    
    
    movePiece(move: Move) {
        throw new Error("Method not implemented.");
    }


}