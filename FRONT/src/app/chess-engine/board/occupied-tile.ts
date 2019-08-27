import { Tile } from './tile';
import {  Piece } from '../pieces/piece';

export class OccupiedTile extends Tile{

    pieceOnTile: Piece

    constructor( pieceOnTile: Piece){
    super()
    this.pieceOnTile = pieceOnTile
    }

    isOccupied() {
        return true
    }    
    
    
    getPiece() {
        return this.pieceOnTile
    }

    
}