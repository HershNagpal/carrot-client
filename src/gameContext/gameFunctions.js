import { action } from "@storybook/addon-actions";
import { compareCoordinates, getEntityById, getEntityByType, getTileByEntityId } from "./gameHelperFunctions";

export const setCurrentMenu = (game, menu) => ({
    ...game,
    currentMenu: menu,
});

export const move = (game, entityId, action) => {
    const movingEntity = getTileByEntityId(game, entityId);
    const beginningTileCoordinates = movingEntity?.coordinates ?? false;
    if (beginningTileCoordinates) {
        /* Check if we are moving the player */
        const rotatedPlayerGameState = entityId === 1
            ? setEntityDirection(game, entityId, action.type.substring(4).toLowerCase())
            : game;
        return placeEntityOnBoard(
            placeEntityOnBoard(rotatedPlayerGameState, -1, beginningTileCoordinates),
            entityId, 
            newCoordInDirection(
                beginningTileCoordinates,
                action.type,
            ),
        );
    }
    return game;
};

export const turnPlayer = (game, action) => (
    setEntityDirection(game, 1, action.type.substring(4).toLowerCase())
);

const setEntityDirection = (game, entityId, direction) => ({
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

export const consumeSuperCarrot = (game) => {
    console.log("You ate the super carrot!");
    return game;
};

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
