import styled from 'styled-components';
import { TitleText } from '../titleText/TitleText';
import { ProgressBar } from '../progressBar/ProgressBar';
import * as InfoPanel from './InfoPanelSubcomponents';

const InfoPanelWrapper = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    padding-right: 20px; 
    grid-template-rows: 1fr 1fr 1fr 2fr 2fr 4fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
        "Icon Name Name"
        "Health Health Health"
        "XP XP XP"
        "Irow1 Irow1 Irow1"
        "Irow2 Irow2 Irow2"
    ; 
`;

export const InfoPanel = ({className}) => (
    <InfoPanelWrapper className={className}>
        <div/>
        <InfoPanel.PlayerName/>
        <InfoPanel.HealthBar/>
        <InfoPanel.XPBar/>
    </InfoPanelWrapper>
);