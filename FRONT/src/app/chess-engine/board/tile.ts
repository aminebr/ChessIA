export abstract class Tile{
    state: string;

    
  constructor() {
    this.state = 'inactive'
  }

  

  abstract isOccupied()

  abstract  getPiece()


}
export class TileArray{
  tileRow : Tile[]
  
  constructor(){
    this.tileRow = Tile[8]
  }
}