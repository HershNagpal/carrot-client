import { defaultGameState } from "./defaultGameState";

export const setCurrentMenu = (game, menu) => ({
    ...game,
    currentMenu: menu,
});

export const move = (game, entityId, direction) => {
    const beginningTileCoordinates = getTileByEntityId(game, entityId).coordinates;
    
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
            ...entities,
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

const getTileByEntityId = (game, entityId) => (
    game.board.find((tile) => (
        tile.entityId === entityId
    ))
);

const getEntityByType = (game, entityType) => (
    game.entities.filter((entity) => (
        entity.type === entityType
    ))
);

const getEntityById = (game, entityId) => (
    game.entities.find((entity) => (
        entity.id === entityId
    ))
);

const compareCoordinates = (coordinates1, coordinates2) => (
    coordinates1.x === coordinates2.x && coordinates1.y === coordinates2.y
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
