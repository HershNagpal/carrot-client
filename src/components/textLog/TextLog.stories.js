import { TextLog } from './TextLog';

export default {
    title: 'Components/UI/TextLog',
    component: TextLog,
};

const Template = (args) => (
    <TextLog {...args}/>
);

export const Default = Template.bind({});
Default.args = {
    log:["You advanced to level 2!","Open the inventory for more info", "You found a carrot", "Look out for wolves", "Welcome to carrot wolf!"],
};
