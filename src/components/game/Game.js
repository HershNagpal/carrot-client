import styled from 'styled-components';
import { GameGrid } from '../gameGrid/GameGrid';
import { InfoPanel } from '../infoPanel/InfoPanel';
import { useKeyData } from '../../hooks/keyListenerHook';
import { useEffect, useState } from 'react';
import { gameCommand } from '../../gameLogic/main';

const GridWrapper = styled.div`
    flex-grow: 3;
`;

const GameWrapper = styled.div`
    background-color: #333333;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 90vh 30vw 1fr;
    grid-template-rows: 1fr 90vh 1fr;
    grid-template-areas: 
        "sp1 sp2 sp3 sp4"
        "sp1 grid infoPanel sp4"
        "sp1 sp5 sp6 sp4"
    ; 
`;

export const Game = ({saveGame, controls, profile}) => {
    
    const [game, setGame] = useState(saveGame);
    const [keyPressed, _] = useKeyData();

    useEffect(() => {
        console.log(controls[game.currentMenu][keyPressed]);
        setGame(gameCommand(game, controls[game.currentMenu][keyPressed]));
    }, [keyPressed]);
    
    return <GameWrapper>
        <GameGrid gridArea="grid"/>
        <InfoPanel gridArea="infoPanel"/>
    </GameWrapper>
};
