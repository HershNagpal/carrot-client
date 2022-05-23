import styled from 'styled-components';
import { ProgressBar } from '../progressBar/ProgressBar';
import { TitleText } from '../titleText/TitleText';
import { TextLog } from '../textLog/TextLog';
import { ItemBubble } from '../itemBubble/ItemBubble';

export const Item1 = ({}) => (
    <ItemBubble 
        gridArea="Item1" 
        text="Player"
        fontSize="20px"
        backgroundColor="#222222"
    />
)

export const Item2 = ({}) => (
    <ItemBubble 
        gridArea="Item2" 
        text="Dog"
        fontSize="20px"
        backgroundColor="#FF00DD"
    />
)

export const Item3 = ({}) => (
    <ItemBubble 
        gridArea="Item3" 
        text="Water"
        fontSize="20px"
        backgroundColor="#22AAFF"
    />
)

export const Item4 = ({}) => (
    <ItemBubble 
        gridArea="Item4" 
        text="Carrot"
        fontSize="20px"
        backgroundColor="#0022FF"
    />
)

export const Item5 = ({}) => (
    <ItemBubble 
        gridArea="Item5" 
        text="Hersh"
        fontSize="20px"
        backgroundColor="#2266AA"
    />
)

export const Item6 = ({}) => (
    <ItemBubble 
        gridArea="Item6" 
        text="Fence"
        fontSize="20px"
        backgroundColor="#2200DD"
    />
)

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