import { Game } from './Game';

export default {
    title: 'Components/Game',
    component: Game,
};

const Template = (args) => (
    <Game {...args}/>
);

export const Default = Template.bind({});
Default.args = {}