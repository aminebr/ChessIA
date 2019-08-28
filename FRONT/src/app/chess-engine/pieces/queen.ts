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

    calculateLegalMoves(board: Board) {
        throw new Error("Method not implemented.");
    }    
    
    
    movePiece(move: Move) {
        throw new Error("Method not implemented.");
    }
}