import { setCurrentMenu, move, consumeSuperCarrot, attack } from './gameFunctions';

export const reducer = (game, action) => {
    switch (action.type) {
        case 'handleKeyPress': 
            return 
        case 'openInventory':
            return setCurrentMenu(game, 'inventory');
        case 'moveUp':
            return move(game, action);
        case 'moveDown':
            return move(game, action);
        case 'moveLeft':
            return move(game, action);
        case 'moveRight':  
            return move(game, action);
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
