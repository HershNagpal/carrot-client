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
                coordinates: {y: Math.floor(i/defaultNumColumns), x: i%defaultNumRows},
                entityId: 1,
                itemId: -1,
            }
            : {
                terrain: "grass",
                coordinates: {y: Math.floor(i/defaultNumColumns), x: i%defaultNumRows},
                entityId: -1,
                itemId: -1,
            }
        )
    ),
    entities: [
        {
            id: -1,
            type: "error",
            direction: "up",
            maxHp: 0,
            currentHp: 0,
            currentLvl: 0,
            currentXp: 0,
            maxXp: 0,
        },
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
            'w'         : 'moveUp',
            'a'         : 'moveLeft',
            's'         : 'moveDown',
            'd'         : 'moveRight',
            'i'         : 'openInventory',
            'escape'    : 'closeMenu',
            ' '         : 'attack',
            'c'         : 'consumeSuperCarrot',
            'o'         : 'openCollection',
            'arrowup'   : 'turnUp',
            'arrowdown' : 'turnDown',
            'arrowleft' : 'turnLeft',
            'arrowright': 'turnRight',
        },
        'inventory': {
            'escape'    : 'closeMenu',
            'o'         : 'openCollection',
            'i'         : 'closeMenu',
        },
        'collection': {
            'escape'    : 'closeMenu',
            'o'         : 'closeMenu',
            'i'         : 'openInventory',
        }
    },
};
