import { UnstyledProgressBar } from './ProgressBar';

export default {
    title: 'Components/ProgressBar',
    component: UnstyledProgressBar,
};

const Template = (args) => (
    <UnstyledProgressBar {...args}/>
);

export const Default = Template.bind({});
Default.args = {
    backgroundcolor: "#FF0000",
};
