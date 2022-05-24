import { ItemBubble } from './ItemBubble';

export default {
    title: 'Components/UI/ItemBubble',
    component: ItemBubble,
};

const Template = (args) => (
    <ItemBubble {...args}/>
);


export const Default = Template.bind({});
Default.args = {
    fontSize: "12px",
    text: "Hello World",
    backgroundColor: "#222222",
}