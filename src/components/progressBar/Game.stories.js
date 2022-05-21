import { Game } from './Game';

export default {
    game: 'Components/Game',
    component: Game,
};

const Template = (args) => (
    <Game {...args}/>
);

export const Default = Template.bind({});
Default.args = {}
