import { ProgressBar } from '../progressBar/ProgressBar';
import { TitleText } from '../titleText/TitleText';

export const PlayerName = ({}) => (
    <TitleText 
        gridArea="Name" 
        text="Player"
    />
)
export const HealthBar = ({}) => (
    <ProgressBar
        gridArea="Health"
        currentValue={75} 
        maxValue={100} 
        height="50%" 
        backgroundColor="#FF0000"
        barColor="#00FF00"
    />
)

export const XPBar = ({}) => (
    <ProgressBar
        gridArea="XP"
        currentValue={20} 
        maxValue={100} 
        height="50%" 
        backgroundColor="#FFFFFF"
        barColor="#0000FF"
    />
)