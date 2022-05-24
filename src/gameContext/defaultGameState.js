export const defaultNumColumns = 15;
export const defaultNumRows = 15;
export const defaultNumTiles = defaultNumColumns * defaultNumRows;

export const defaultGameState = {
    currentMenu: "game",
    board: Array(defaultNumTiles).fill(0).map(
        (_, i) => ({
            terrain: "grass",
            coordinates: {x: Math.floor(i/defaultNumColumns), y: i%defaultNumRows},
            entityId: -1,
            itemId: -1,
        })
    ),
    entities: [
    ],
    keyBindings: {
        'game': {
            'w': 'moveUp',
            'a': 'moveLeft',
            's': 'moveDown',
            'd': 'moveRight',
            'i': 'openInventory',
            'escape': 'closeMenu',
            ' ': 'attack',
            'c': 'consumeSuperCarrot',
            'o': 'openCollection',
        },
        'inventory': {
            'escape': 'closeMenu',
            'o': 'openCollection',
            'i': 'closeMenu',
        },
        'collection': {
            'escape': 'closeMenu',
            'o': 'closeMenu',
            'i': 'openInventory',
        }
    },
};
