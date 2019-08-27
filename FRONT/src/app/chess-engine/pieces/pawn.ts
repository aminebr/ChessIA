import { Piece } from './piece';
import { Board } from '../board/board';
import { Move } from '../move/move';
import { Player } from '../player/player';
import { PieceType } from './piece-type.enum';

export class Pawn extends Piece{


    
    constructor(pieceBelongsTo : Player){
        super(pieceBelongsTo,PieceType.Pawn,true)
    }

    calculateLegalMoves(board: Board) {
        throw new Error("Method not implemented.");
    }    
    
    
    movePiece(move: Move) {
        throw new Error("Method not implemented.");
    }


}