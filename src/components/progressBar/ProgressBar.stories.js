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
    maxValue: 100,
    currentValue: 50,
    barColor: "#FF0000",
    backgroundColor: "#00FF00",
}
