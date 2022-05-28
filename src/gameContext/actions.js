
export const initializeGame = () => ({
    type: "initializeGame",
    parameters: {},
})

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

export const validActionNames = [
    'moveUp', 
    'moveDown', 
    'moveLeft', 
    'moveRight', 
    'turnUp', 
    'turnDown', 
    'turnLeft', 
    'turnRight', 
    'openInventory', 
    'closeMenu', 
    'attack', 
    'consumeSuperCarrot', 
    'openCollection', 
];

export const dispatchActionNameMap = (actionName, dispatch) => {
    console.log("Action Map:" + actionName)
    switch (actionName) {
        case 'moveUp':
            dispatch(moveUp());
            break;
        case 'moveDown':
            dispatch(moveDown());
            break;
        case 'moveLeft': 
            dispatch(moveLeft());
            break;
        case 'moveRight': 
            dispatch(moveRight());
            break;
        case 'turnUp': 
            dispatch(turnUp());
            break;
        case 'turnDown': 
            dispatch(turnDown());
            break;
        case 'turnLeft': 
            dispatch(turnLeft());
            break;
        case 'turnRight': 
            dispatch(turnRight());
            break;
        case 'openInventory': 
            dispatch(openInventory());
            break;
        case 'closeMenu': 
            dispatch(closeMenu());
            break;
        case 'attack': 
            dispatch(attack());
            break;
        case 'consumeSuperCarrot': 
            dispatch(consumeSuperCarrot());
            break;
        case 'openCollection': 
            dispatch(openCollection());
            break;
        default:
            break;
    }
};