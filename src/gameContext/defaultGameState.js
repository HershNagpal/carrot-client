import { number } from "prop-types";

export const defaultNumColumns = 15;
export const defaultNumRows = 15;
export const defaultNumTiles = defaultNumColumns * defaultNumRows;

export const defaultGameState = {
    moves: 0,
    totalCarrots: 0,

    weaponId: 1,
    pocketId: 1,
    superCarrotId: 1,
    fences: 5,
    glow: 0,

    carrotHealing: 1,
    fenceHp: 3,
    maxHeldFences: 5,

    gameOver: false,
    currentMenu: 'game',

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
            'W'         : 'turnUp',
            'A'         : 'turnLeft',
            'S'         : 'turnDown',
            'D'         : 'turnwRight',
            'i'         : 'openInventory',
            'escape'    : 'closeMenu',
            ' '         : 'attack',
            'c'         : 'consumeSuperCarrot',
            'o'         : 'openCollection',
            'ArrowUp'   : 'turnUp',
            'ArrowDown' : 'turnDown',
            'ArrowLeft' : 'turnLeft',
            'ArrowRight': 'turnRight',
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
