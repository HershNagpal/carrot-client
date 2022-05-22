import { TitleText } from './TitleText';

export default {
    title: 'Components/UI/TitleText',
    component: TitleText,
};

const Template = (args) => (
    <TitleText {...args}/>
);

export const Default = Template.bind({});
Default.args = {
    text:"Sample Text",
};
