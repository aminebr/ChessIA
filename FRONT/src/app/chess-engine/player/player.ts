import { Move } from '../move/move';

export abstract class Player {
    
    movesHistory : Move[]
    canCastleRight : boolean
    canCastleLeft : boolean
    
    constructor(parameters) {
        
    }
}