import { Tile } from './Tile';
import styled from 'styled-components';

const StorybookTile = styled(Tile)`
    aspect-ratio: 1;
    max-width: 30vw;
`;

export default {
    title: 'Components/Grid/Tile',
    component: StorybookTile,
};

const Template = (args) => <StorybookTile {...args}/>;

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
    backgroundImage: "playerLeftImage",
}

export const PlayerRight = Template.bind({});
PlayerRight.args = {
    backgroundSize: "90%",
    backgroundImage: "playerRightImage",
}

