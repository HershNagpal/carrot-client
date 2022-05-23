import styled from 'styled-components';
import { ProgressBar } from '../progressBar/ProgressBar';
import { TitleText } from '../titleText/TitleText';
import { TextLog } from '../textLog/TextLog';

export const PlayerName = ({}) => (
    <TitleText 
        gridArea="Name" 
        text="Player"
    />
)
const UnfHealthBar = ({className}) => (
    <ProgressBar
        className={className}
        gridArea="Health"
        currentValue={75} 
        maxValue={100} 
        height="70%" 
        backgroundColor="#FF0000"
        barColor="#00FF00"
    />
)

export const HealthBar = styled(UnfHealthBar)`
    padding: 0px 20px;
`;

const UnfXPBar = ({className}) => (
    <ProgressBar
        className={className}
        gridArea="XP"
        currentValue={20} 
        maxValue={100} 
        height="50%" 
        backgroundColor="#FFFFFF"
        barColor="#0000FF"
    />
)

export const XPBar = styled(UnfXPBar)`
    padding: 0px 20px;
`;

export const Log = ({log}) => (
    <TextLog
    gridArea="Log"
    log={log}
    />
)