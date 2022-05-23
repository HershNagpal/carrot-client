import styled from 'styled-components';
import { TitleText } from '../titleText/TitleText';
import { ProgressBar } from '../progressBar/ProgressBar';
import { PlayerName, HealthBar, XPBar } from './InfoPanelSubcomponents';

const InfoPanelWrapper = styled.div`
    display: grid;
    height: 100vh;
    grid-template-rows: 1fr 1fr 1fr 2fr 2fr 4fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
        "Name Name Name"
        "Health Health Health"
        "XP XP XP"
        "Irow1 Irow1 Irow1"
        "Irow2 Irow2 Irow2"
    ; 
    grid-area: ${props => props.gridArea};
`;

export const InfoPanel = ({gridArea, className}) => (
    <InfoPanelWrapper gridArea={gridArea} className={className}>
        <div/>
        <PlayerName/>
        <HealthBar/>
        <XPBar/>
    </InfoPanelWrapper>
);