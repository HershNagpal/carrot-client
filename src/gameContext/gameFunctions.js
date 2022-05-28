import { compareCoordinates, getEntityById, getEntityByType, getTileByEntityId, randomCarrotOfRiddlesText } from "./gameHelperFunctions";

export const setCurrentMenu = (game, menu) => ({
    ...game,
    currentMenu: menu,
});

export const move = (game, entityId, direction) => {
    const beginningTileCoordinates = getTileByEntityId(game, entityId)?.coordinates ?? false;
    if (beginningTileCoordinates){}
    return game;
};

export const consumeSuperCarrot = (game) => (
    {
        1: carrotOfRiddles(),
        undefined: game,
        '-1': game,
    }[game.superCarrotId]
);

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
        case 'moveUp':
            return { x: x, y: y - 1 };
        case 'moveDown':
            return { x: x, y: y + 1 };
        case 'moveLeft':
            return { x: x - 1, y: y };
        case 'moveRight':
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
    return game;
}