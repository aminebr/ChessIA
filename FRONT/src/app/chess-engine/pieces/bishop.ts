import { Piece } from './piece';
import { PieceType } from './piece-type.enum';
import { Board } from '../board/board';
import { Move } from '../move/move';
import { Player } from '../player/player';

export class Bishop extends Piece{

    constructor(pieceBelongsTo : Player){
        super(pieceBelongsTo,PieceType.Bishop,true)
    }

    calculateLegalMoves(board: Board) {
        throw new Error("Method not implemented.");
    }    
    
    
    movePiece(move: Move) {
        throw new Error("Method not implemented.");
    }
}