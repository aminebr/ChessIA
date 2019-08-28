import { Player } from '../player/player';
import {  PieceType } from './piece-type.enum';
import { Board } from '../board/board';
import { Move } from '../move/move';


export abstract class Piece {
    
    
    pieceBelongsTo : Player
    pieceType : PieceType
    firstMove : boolean
    pieceLink : string

    constructor(pieceBelongsTo : Player,pieceType : PieceType, firstMove : boolean){
        this.pieceBelongsTo = pieceBelongsTo
        this.pieceType = pieceType
        this.firstMove = firstMove    
    }

    abstract calculateLegalMoves(board: Board,x : number , y : number)

    abstract movePiece(move: Move)
    
    isFirstMove() {
        return this.firstMove
    }

    makeFirstMove(){
        this.firstMove = false
    }

    getPieceBelongsTo(){
        return this.pieceBelongsTo
    }


    getPieceType(){
        return this.pieceType
    }

    getPieceLink(){
        return this.pieceLink
    }
}