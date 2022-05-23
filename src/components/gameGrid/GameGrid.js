import { Tile } from '../tile/Tile';
import React from 'react';
import { GameContext } from '../../gameLogic/gameContext';
import styled from 'styled-components';
import { defaultGameGrid } from './sampleGameGrid';

const GridWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(15, 1fr);
    grid-template-columns: repeat(15, 1fr);
    grid-area: ${props => props.gridArea};
`;

export const GameGrid = ({gridArea}) => {

    const [gameContextState, dispatch] = React.useContext(GameContext);
    const relevantGameState = (gameContextState?.boardState ?? false) ? gameContextState.boardState : defaultGameGrid
    
    return (
        <GridWrapper gridArea={gridArea}>
            {
                relevantGameState.map(
                    (e,i) => <Tile backgroundImage={e.backgroundImage} key={`tile-${i}`}/>
                )
            }
        </GridWrapper>
    );
};

