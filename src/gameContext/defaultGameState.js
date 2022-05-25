export const defaultNumColumns = 15;
export const defaultNumRows = 15;
export const defaultNumTiles = defaultNumColumns * defaultNumRows;

export const defaultGameState = {
    currentMenu: "game",
    board: Array(defaultNumTiles).fill(0).map(
        (_, i) => (
            i === 112 
            ? {
                terrain: "grass",
                coordinates: {x: Math.floor(i/defaultNumColumns), y: i%defaultNumRows},
                entityId: 1,
                itemId: -1,
            }
            : {
                terrain: "grass",
                coordinates: {x: Math.floor(i/defaultNumColumns), y: i%defaultNumRows},
                entityId: -1,
                itemId: -1,
            }
        )
    ),
    entities: [
        {
            id: 1,
            type: "player",
            direction: "right",
            maxHp: 10,
            currentHp: 10,
            currentLvl: 1,
            currentXp: 0,
            maxXp: 10,
        },
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
