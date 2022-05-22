import { Game } from './Game';
import { defaultControls } from '../../constants/defaultControls';

export default {
    title: 'Components/Game',
    component: Game,
};

const Template = (args) => (
    <Game {...args}/>
);

export const Default = Template.bind({});
Default.args = {
    saveGame: {
        currentMenu: 'game',
    },
    controls: defaultControls,
    profile: {
        name: 'no'
    }
}
