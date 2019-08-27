import { Tile } from './tile';

export class EmptyTile extends Tile{

    constructor(tileCoordinateX: number,tileCoordinateY: number) {
        super(tileCoordinateX,tileCoordinateY)
      }
    
      isOccupied() {
        return false
      }
    
      getPiece() {
        return null
      }
}