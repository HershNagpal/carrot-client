import { dispatchActionNameMap, validActionNames } from "./actions";

export const handleKeyPress = (game, dispatch, keyPressed) => {
    const actionString = game?.keyBindings?.[game?.currentMenu]?.[keyPressed] ?? "Error"
    if (validActionNames.includes(actionString))
        dispatchActionNameMap(actionString, dispatch);
};