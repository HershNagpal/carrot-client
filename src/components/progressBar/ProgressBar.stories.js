import { ProgressBar } from './ProgressBar';

export default {
    title: 'Components/ProgressBar',
    component: ProgressBar,
};

const Template = (args) => (
    <ProgressBar {...args}/>
);

export const Default = Template.bind({});
Default.args = {
    backgroundcolor: "#FF0000",
};
