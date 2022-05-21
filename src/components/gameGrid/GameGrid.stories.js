import { GameGrid } from './GameGrid';
import { defaultGameGrid } from './sampleGameGrid';

export default {
    title: 'Components/Grid/GameGrid',
    component: GameGrid,
};

const Template = (args) => (
    <GameGrid {...args}/>
);

export const Default = Template.bind({});
Default.args = {
    gameGridState: defaultGameGrid,
}
