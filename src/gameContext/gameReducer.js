import { setCurrentMenu, move } from './gameFunctions';

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
        default:
            throw new Error('Invalid Action Type: ' + action);
    }
}
