import { Tile } from './Tile';

export default {
    title: 'Components/Grid/Tile',
    component: Tile,
};

const Template = (args) => <Tile {...args}/>;

export const Grass = Template.bind({});
Grass.args = {
    backgroundSize: "100%",
    backgroundImage: "grassImage",
}

export const Carrot = Template.bind({});
Carrot.args = {
    backgroundSize: "90%",
    backgroundImage: "carrotImage",
}

export const Fence = Template.bind({});
Fence.args = {
    backgroundSize: "90%",
    backgroundImage: "fenceImage",
}

export const Wolf = Template.bind({});
Wolf.args = {
    backgroundSize: "90%",
    backgroundImage: "wolfImage",
}

export const Tree = Template.bind({});
Tree.args = {
    backgroundSize: "90%",
    backgroundImage: "treeImage",
}

export const PlayerUp = Template.bind({});
PlayerUp.args = {
    backgroundSize: "90%",
    backgroundImage: "playerUpImage",
}

export const PlayerDown = Template.bind({});
PlayerDown.args = {
    backgroundSize: "90%",
    backgroundImage: "playerDownImage",
}

export const PlayerLeft = Template.bind({});
PlayerLeft.args = {
    backgroundSize: "90%",
    backgroundImage: "playerleftImage",
}

export const PlayerRight = Template.bind({});
PlayerRight.args = {
    backgroundSize: "90%",
    backgroundImage: "playerRightImage",
}

