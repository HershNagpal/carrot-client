
export const moveUp = () => ({
    type: "moveUp",
    parameters: {},
});

export const moveDown = () => ({
    type: "moveDown",
    parameters: {},
});

export const moveLeft = () => ({
    type: "moveLeft",
    parameters: {},
});

export const moveRight = () => ({
    type: "moveRight",
    parameters: {},
});

export const turnUp = () => ({
    type: "turnUp",
    parameters: {},
});

export const turnDown = () => ({
    type: "turnDown",
    parameters: {},
});

export const turnLeft = () => ({
    type: "turnLeft",
    parameters: {},
});

export const turnRight = () => ({
    type: "turnRight",
    parameters: {},
});

export const openInventory = () => ({
    type: "openInventory",
    parameters: {},
});

export const closeMenu = () => ({
    type: "closeMenu",
    parameters: {},
});

export const attack = () => ({
    type: "attack",
    parameters: {},
});

export const consumeSuperCarrot = () => ({
    type: "consumeSuperCarrot",
    parameters: {},
});

export const openCollection = () => ({
    type: "openCollection",
    parameters: {},
});

export const actionNameMap = {
    'moveUp': moveUp(),
    'moveDown': moveDown(),
    'moveLeft': moveLeft(),
    'moveRight': moveRight(),
    'turnUp': turnUp(),
    'turnDown': turnDown(),
    'turnLeft': turnLeft(),
    'turnRight': turnRight(),
    'openInventory': openInventory(),
    'closeMenu': closeMenu(),
    'attack': attack(),
    'consumeSuperCarrot': consumeSuperCarrot(),
    'openCollection': openCollection(),
};