import { ProgressBar } from './ProgressBar';

export default {
    title: 'Components/UI/ProgressBar',
    component: ProgressBar,
};

const Template = (args) => (
    <ProgressBar {...args}/>
);

export const Default = Template.bind({});
Default.args = {
    height: "10%",
    currentValue: 50,
    maxValue: 100,
    fontSize: "2rem",
    backgroundColor: "#FF0000",
    barColor: "#00FF00",
};
