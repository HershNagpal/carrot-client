import { actionNameMap } from "./actions";

export const handleKeyPress = (game, dispatch, keyPressed) => {
    const actionString = game?.keyBindings?.[game?.currentMenu]?.[keyPressed] ?? "Error"
    if (Object.keys(actionNameMap).includes(actionString))
        dispatch(
            actionNameMap[actionString]
        )
};