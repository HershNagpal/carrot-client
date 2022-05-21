import { InfoPanel } from './InfoPanel';
import styled from 'styled-components';

const StorybookInfoPanel = styled(InfoPanel)`
    max-width: 30vw;
`;

export default {
    title: 'Components/InfoPanel',
    component: StorybookInfoPanel,
};

const Template = (args) => (
    <StorybookInfoPanel {...args}/>
);

export const Default = Template.bind({});
Default.args = {}
