import { Tile } from './tile';
import {  Piece } from '../pieces/piece';

export class OccupiedTile extends Tile{

    pieceOnTile: Piece

    constructor(tileCoordinateX: number,tileCoordinateY: number, pieceOnTile: Piece){
    super(tileCoordinateX,tileCoordinateY)
    this.pieceOnTile = pieceOnTile
    }
    isOccupied() {
        return true
    }    
    
    
    getPiece() {
        this.pieceOnTile
    }

    
}