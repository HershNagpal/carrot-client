import { setCurrentMenu, move, consumeSuperCarrot, attack, turnPlayer } from './gameFunctions';

export const reducer = (game, action) => {
    switch (action.type) {
        case 'handleKeyPress': 
            return 
        case 'openInventory':
            return setCurrentMenu(game, 'inventory');
        case 'moveUp':
        case 'moveDown':
        case 'moveLeft':
        case 'moveRight':  
            return move(game, 1, action);
        case 'turnUp':
        case 'turnDown':
        case 'turnLeft':
        case 'turnRight':  
            return turnPlayer(game, action);
        case 'consumeSuperCarrot':
            return consumeSuperCarrot(game);
        case 'openMenu':
            return setCurrentMenu(game, 'menu');
        case 'openCollection':
            return setCurrentMenu(game, 'collection');      
        case 'openInventory':
            return setCurrentMenu(game, 'inventory');    
        case 'closeMenu':
            return setCurrentMenu(game, 'game');    
        case 'attack':
            return attack(game);  
        default:
            throw new Error('Invalid Action Type: ' + action);
    }
}
