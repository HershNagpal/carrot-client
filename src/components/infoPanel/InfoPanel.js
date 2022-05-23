import styled from 'styled-components';
import { PlayerName, HealthBar, XPBar, Log } from './InfoPanelSubcomponents';

const InfoPanelWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 2fr 2fr 4fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
        "Name Name Name"
        "Health Health Health"
        "XP XP XP"
        "Irow1 Irow1 Irow1"
        "Irow2 Irow2 Irow2"
        "Log Log Log"
    ;
    grid-area: ${props => props.gridArea};
`;

export const InfoPanel = ({gridArea, className}) => (
    <InfoPanelWrapper gridArea={gridArea} className={className}>
        <div/>
        <PlayerName/>
        <HealthBar/>
        <XPBar/>
        <Log log={["Dog", "Water", "MMMM", "Hersh is a sussy baka", "Watercan", "Watercan2", "Watercan3", "Watercan", "Watercan"]}/>
    </InfoPanelWrapper>
);