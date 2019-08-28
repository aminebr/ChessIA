export abstract class Tile{
    state: string

    color : string
    
  constructor() {
    this.state = "inactive"
    this.color = "white"
  }

  getColor(){
    return this.color
  }  

  setColor(color : string){
    this.color = color
  }

  abstract isOccupied()

  abstract  getPiece()


}

