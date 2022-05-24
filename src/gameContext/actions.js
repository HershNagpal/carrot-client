export const openInventory = () => ({
    type: "openInventory",
    parameters: {},
});

export const handleKeyPress = (key, currentMenu) = ({
    type: 'handleKeyPress',
    parameters: {
        key: key,
        currentMenu: currentMenu,
    },
});

export const getAction = (action) => ({
    'openInventory': () => openInventory(),
}[action])