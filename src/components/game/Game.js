import styled from 'styled-components';
import { GameGrid } from '../gameGrid/GameGrid';
import { TextLog } from '../textLog/TextLog';
import { InfoPanel } from '../infoPanel/InfoPanel';
import { useKeyData } from '../../hooks/keyListenerHook';
import { useEffect, useState } from 'react';
import { gameCommand } from '../../gameLogic/main';

const GameWrapper = styled.div`
    background-color: #333333;
    display: grid;
    padding: 0;
    height: 100vh;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "GameArea RightUI"; 
`;

const BoardWrapper = styled.div`
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
`;

const StyledTextLog = styled(TextLog)`
    position: absolute;
    top: 0%;
    right: 0%;
`;

export const Game = ({saveGame, controls, profile}) => {
    
    const [game, setGame] = useState(saveGame);
    const [keyPressed, _] = useKeyData();

    useEffect(() => {
        console.log(controls[game.currentMenu][keyPressed]);
        setGame(gameCommand(game, controls[game.currentMenu][keyPressed]));
    }, [keyPressed]);
    
    return <GameWrapper>
        <GameGrid/>
        <InfoPanel/>
    </GameWrapper>
};
