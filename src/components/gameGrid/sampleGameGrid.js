const numColumns = 15;
const numRows = 15;
const numTiles = numColumns * numRows;

export const defaultGameGrid = Array(numTiles).fill(0).map(
    (_, i) => ({
        terrain: "grass",
        coordinates: [Math.floor(i/numColumns), i%numRows],
        itemId: -1,
        entityId: -1,
    })
);
