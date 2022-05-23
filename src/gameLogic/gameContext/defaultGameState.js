const numColumns = 15;
const numRows = 15;
const numTiles = numColumns * numRows;

export const defaultGameState = {
    currentMenu: "game",
    boardState: Array(numTiles).fill(0).map(
        (_, i) => ({
            backgroundImage: "grassImage",
            coordinates: [Math.floor(i/numColumns), i%numRows]
        })
    ),
}