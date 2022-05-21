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
    log:["Welcome to carrot wolf!", "Dogwater", "Test"],
};
