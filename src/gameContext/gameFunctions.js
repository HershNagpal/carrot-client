import { action } from "@storybook/addon-actions";
import { compareCoordinates, getEntityById, getEntityByType, getTileByCoordinates, getTileByEntityId, checkCoordsInBounds, randomCarrotOfRiddlesText } from "./gameHelperFunctions";

export const initializeGame = (game) => ({

})

export const keyActionMap = {
    'moveUp': game => move(game, 1, "up"), 
    'moveDown': game => move(game, 1, "down"), 
    'moveLeft': game => move(game, 1, "left"), 
    'moveRight': game => move(game, 1, "right"), 
    'turnUp': game => setEntityDirection(game, 1, "up"), 
    'turnDown': game => setEntityDirection(game, 1, "down"), 
    'turnLeft': game => setEntityDirection(game, 1, "left"), 
    'turnRight': game => setEntityDirection(game, 1, "right"), 
    'openInventory': game => setCurrentMenu(game, 'inventory'), 
    'closeMenu': game => setCurrentMenu(game, 'game'), 
    'attack': game => attack(game), 
    'consumeSuperCarrot': game => consumeSuperCarrot(game), 
    'openCollection': game => setCurrentMenu(game, 'collection'), 
};

export const handleKeyPress = (game, keyAction) => {
    return keyActionMap[keyAction](game);
};

export const setCurrentMenu = (game, menu) => ({
    ...game,
    currentMenu: menu,
});

export const move = (game, entityId, direction) => {
    const movingEntity = getTileByEntityId(game, entityId);
    const beginningTileCoordinates = movingEntity?.coordinates ?? false;
    const newLocation = newCoordInDirection(beginningTileCoordinates, direction);

    if (beginningTileCoordinates && checkCoordsInBounds(newLocation)) {
        /* Check if we are moving the player */
        const rotatedPlayerGameState = entityId === 1
            ? setEntityDirection(game, entityId, direction)
            : game;
        return placeEntityOnBoard(
            placeEntityOnBoard(rotatedPlayerGameState, -1, beginningTileCoordinates),
            entityId, 
            newLocation,
        );
    }
    return game;
};

export const consumeSuperCarrot = (game) => {
    switch (game.superCarrotId) {
        case 1:
            return carrotOfRiddles(game);
        default:
            return game;
    }
};

export const setEntityDirection = (game, entityId, direction) => ({
    ...game, 
    entities: [
        ...game.entities.map(
            (e) => e.id === entityId
            ? {
                ...e,
                direction: direction,
            }
            : e
        )
    ]
});

export const attack = (game) => {
    console.log("You attacked!");
    return game;
};


const placeEntityOnBoard = (game, entityId, coordinates) => ({
    ...game, 
    board: game.board.map((tile)=> (
        compareCoordinates(tile.coordinates, coordinates)
            ? {
                ...tile,
                entityId: entityId
            } 
            : tile
    ))
});

const addEntityToEntityList = (game, entity) => (
    {
        ...game,
        entities: [
            ...game.entities,
            entity,
        ],
    }
);

const spawnEntity = (game, entity, coordinates) => (
    placeEntityOnBoard( 
        addEntityToEntityList(game, entity), 
        entity.entityId, 
        coordinates,
    )
);

export const newCoordInDirection = (coordinates, direction) => {
    const {x, y} = coordinates;
    switch (direction) {
        case 'up':
            return { x: x, y: y - 1 };
        case 'down':
            return { x: x, y: y + 1 };
        case 'left':
            return { x: x - 1, y: y };
        case 'right':
            return { x: x + 1, y: y };
        default:
            throw new Error('Invalid Move Direction: ' + direction);
    }
};

export const setHp = (game, entityId, hp) => (
    game.entities.map((entity) => (
        entity.id === entityId
            ? {...entity, currentHp: hp}
            : entity
    ))
);

export const killEntity = (game, entityId) => ({
    ...game, 
    entities: game.entities.filter((entity) => (
        entity.id !== entityId
    )),
    board: game.board.map((tile) => (
        tile.entityId === entityId
            ? {...tile, entityId: -1}
            : tile
    )),
});

export const placeFence = (game, coordsToPlace) => {
    const canPlaceFence = () => {
        const tileToPlace = getTileByCoordinates(coordsToPlace);
        return (tileToPlace.terrain === 'grass' && tileToPlace.entityId === -1) 
            ?   true
            :   false
    };
    const fence = {
        entityId: game.entities.length + 1,
        type: 'fence',
        maxHp: 3,
        currentHp: 3,
    };
    return canPlaceFence ? spawnEntity(game, fence, coordsToPlace) : game;
};

const carrotOfRiddles = (game) => {
    console.log(randomCarrotOfRiddlesText());
    return {
        ...game,
        superCarrotId: 0,
    };
};