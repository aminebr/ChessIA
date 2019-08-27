export abstract class Tile{
    state: string;
    tileCoordinateX: number;
    tileCoordinateY: number;
    
  constructor(tileCoordinateX: number,tileCoordinateY: number) {
    this.tileCoordinateX = tileCoordinateX
    this.tileCoordinateY = tileCoordinateY
    this.state = 'inactive'
  }

  

  abstract isOccupied()

  abstract  getPiece()

  getCoordinateX(){
    return this.tileCoordinateX
  }
  
  getCoordinateY(){
    return this.tileCoordinateY
  }
}