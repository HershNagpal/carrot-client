import styled from 'styled-components';
import { NameText } from '../nameText/NameText';
import { TextLog } from '../textLog/TextLog';
import { ProgressBar } from '../progressBar/ProgressBar';

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
        <NameText text="Player"/>
        <ProgressBar
            gridArea="Health"
            currentValue={75} 
            maxValue={100} 
            height="50%" 
            backgroundColor="#FF0000"
            barColor="#00FF00"
        />
        <ProgressBar
            gridArea="XP"
            currentValue={20} 
            maxValue={100} 
            height="50%" 
            backgroundColor="#FFFFFF"
            barColor="#0000FF"
        />
    </InfoPanelWrapper>
);