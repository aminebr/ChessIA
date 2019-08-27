import { Player } from '../player/player';
import {  PieceType } from './piece-type.enum';
import { Board } from '../board/board';
import { Move } from '../move/move';


export abstract class Piece {
    
    
    pieceBelongsTo : Player
    pieceType : PieceType
    firstMove : boolean

    constructor(pieceBelongsTo : Player,pieceType : PieceType, firstMove : boolean){
        this.pieceBelongsTo = pieceBelongsTo
        this.pieceType = pieceType
        this.firstMove = firstMove    
    }

    abstract calculateLegalMoves(board: Board)

    abstract movePiece(move: Move)
    
    isFirstMove() {
        return this.firstMove
    }

    getPieceBelongsTo(){
        return this.pieceBelongsTo
    }


    getPieceType(){
        return this.pieceType
    }
}