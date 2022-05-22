export const gameCommand = (game, command) => ({
  
    'moveUp': move(game, 'up'),
    'moveDown': move(game, 'down'),
    'moveLeft': move(game, 'left'),
    'moveRight': move(game, 'right'),

    'openInventory': () => openInventory(game),
    'closeMenu': () => closeMenus(game),
    undefined: game

}[command]);

const move = (game, direction) => {
    console.log('Move ' + direction);
    return game;
};

const openInventory = (game) => (
    {...game, currentMenu: 'inventory'}
);

const closeMenus = (game) => (
    {...game, currentMenu: 'game'}  
);
