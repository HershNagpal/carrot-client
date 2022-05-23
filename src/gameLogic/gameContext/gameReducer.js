import { setCurrentMenu } from "./actionFunctions";

export const reducer = (state, action) => {
    switch (action.type) {
        case "openInventory":
            return setCurrentMenu(state, "Inventory");
        default:
            throw new Error("Invalid Action Type");
    }
}
