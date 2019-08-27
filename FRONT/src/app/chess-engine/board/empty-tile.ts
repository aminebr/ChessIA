import { Tile } from './tile';

export class EmptyTile extends Tile{

    static emptyTile : EmptyTile

    static getEmptyTileInstance(){
      if(this.emptyTile == null)
          this.emptyTile = new EmptyTile()
      return this.emptyTile
    }


    constructor() {
      super()
      }
    
      isOccupied() {
        return false
      }
    
      getPiece() {
        return null
      }
}