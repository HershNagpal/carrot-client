import carrotOfRiddlesText from "./carrotOfRiddlesText";

export const getTileByEntityId = (game, entityId) => (
    game.board.find((tile) => (
        tile.entityId === entityId
    ))
);

export const getEntityByType = (game, entityType) => (
    game.entities.filter((entity) => (
        entity.type === entityType
    ))
);

export const getTileByCoordinates = (game, coordinates) => (
    game.board.find((tile) => (
        compareCoordinates(tile.coordinates, coordinates)
    ))
);

export const getEntityById = (game, entityId) => (
    game.entities.find((entity) => (
        entity.id === entityId
    ))
);

export const compareCoordinates = (coordinates1, coordinates2) => (
    coordinates1.x === coordinates2.x && coordinates1.y === coordinates2.y
);

export const randomCarrotOfRiddlesText = () => (
    carrotOfRiddlesText[Math.floor(Math.random() * carrotOfRiddlesText.length)]
);