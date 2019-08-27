import { Player } from '../player/player';
import { pieceType } from './piece-type.enum';
import { Board } from '../board/board';
import { Move } from '../move/move';
import { Tile } from '../board/tile';

export abstract class Piece {
    
    tile : Tile
    pieceBelongsTo : Player
    pieceType : pieceType
    firstMove : boolean

    constructor(tile : Tile,pieceBelongsTo : Player,pieceType : pieceType, firstMove : boolean){
        this.tile = tile
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

    getPosition(){
        return this.tile
    }

    getPieceType(){
        return this.pieceType
    }
}