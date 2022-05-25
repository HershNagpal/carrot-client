import styled from 'styled-components';
import React from 'react';
import { GameContext } from '../../gameContext';
import { PlayerName, HealthBar, XPBar, Log, Item1, Item2, Item3, Item4, Item5, Item6} from './InfoPanelSubcomponents';
import { getEntityById } from '../../gameContext/gameHelperFunctions';

const InfoPanelWrapper = styled.div`
    display: grid;
    padding-left: 20px;
    grid-template-rows: 1fr 1fr 1fr 2fr 2fr 4fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
        "Name Name Name"
        "Health Health Health"
        "XP XP XP"
        "Item1 Item2 Item3"
        "Item4 Item5 Item6"
        "Log Log Log"
    ;
    grid-area: ${props => props.gridArea};
`;



export const InfoPanel = ({gridArea, className}) => {
    const [gameContextState, dispatch] = React.useContext(GameContext);
    
    const player = (gameContextState ?? false) 
        ? (getEntityById(gameContextState, 1) ?? false)
        : false

    return (
        <InfoPanelWrapper gridArea={gridArea} className={className}>
            <div/>
            <PlayerName/>
            <HealthBar currentValue={player.currentHp} maxValue={player.maxHp}/>
            <XPBar currentValue={player.currentXp} maxValue={player.maxXp}/>
            <Item1/>
            <Item2/>
            <Item3/>
            <Item4/>
            <Item5/>
            <Item6/>
            <Log log={["Dog", "Water", "MMMM", "Hersh is a sussy baka", "Watercan", "Watercan2", "Watercan3", "Watercan", "Watercan"]}/>
        </InfoPanelWrapper>
    )
};