import { NameText } from './NameText';

export default {
    title: 'Components/UI/NameText',
    component: NameText,
};

const Template = (args) => (
    <NameText {...args}/>
);

export const Default = Template.bind({});
Default.args = {
    text:"Sample Text",
};
