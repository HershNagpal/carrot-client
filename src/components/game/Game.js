import styled from 'styled-components';
import { GameContext } from '../../gameLogic/gameContext';
import { reducer } from '../../gameLogic/gameContext/gameReducer';
import { GameGrid } from '../gameGrid/GameGrid';
import { InfoPanel } from '../infoPanel/InfoPanel';
import { defaultGameState } from '../../gameLogic/gameContext/defaultGameState';
import React from 'react';

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

export const Game = ({}) => {
    
    const innerContext = React.useReducer(reducer, defaultGameState);
    const [gameContextState, dispatch] = innerContext;

    /*
    const [game, setGame] = useState(saveGame);
    const [keyPressed, _] = useKeyData();

    useEffect(() => {
        console.log(controls[game.currentMenu][keyPressed]);
        setGame(gameCommand(game, controls[game.currentMenu][keyPressed]));
    }, [keyPressed]);
    */

    return (
        <GameContext.Provider value={innerContext}>
            <GameWrapper>
                {console.log(gameContextState)}
                <GameGrid gridArea="grid"/>
                <InfoPanel gridArea="infoPanel"/>
            </GameWrapper>
        </GameContext.Provider>
    );
};
