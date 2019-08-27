import { Tile } from './tile';
import { Player } from '../player/player';
import { WhitePlayer } from '../player/white-player';
import { BlackPlayer } from '../player/black-player';

export class Board{
    gameBoard: Tile[][]
    nextPlayerToMove : Player
    whiteplayer : WhitePlayer
    blackPlayer : BlackPlayer

    constructor(){
        
    }
}