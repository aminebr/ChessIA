export abstract class Tile{
    state: string;

    
  constructor() {
    this.state = 'inactive'
  }

  

  abstract isOccupied()

  abstract  getPiece()


}

