import { Piece } from './piece';
import { Board } from '../board/board';
import { Move } from '../move/move';

export class Pawn extends Piece{



    calculateLegalMoves(board: Board) {
        throw new Error("Method not implemented.");
    }    
    
    
    movePiece(move: Move) {
        throw new Error("Method not implemented.");
    }


}