import { GameGrid } from './GameGrid';
import { defaultGameGrid } from './sampleGameGrid';

export default {
    gameGrid: 'Components/GameGrid',
    component: GameGrid,
};

const Template = (args) => (
    <GameGrid {...args}/>
);

export const Default = Template.bind({});
Default.args = {
    gameGridState: defaultGameGrid,
}
