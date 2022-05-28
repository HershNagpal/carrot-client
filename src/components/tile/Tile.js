import styled from 'styled-components';
import { tileImageMap } from '../assets/tileImageMap';
import { GameContext } from '../../gameContext';
import { getEntityById } from '../../gameContext/gameHelperFunctions';
import React from 'react';

export const Tile = ({terrain, backgroundSize, index}) => {

    const [gameContextState, _] = React.useContext(GameContext);

    const entity = getEntityById(gameContextState, gameContextState.board[index].entityId);
    const entityImage = entity.type !== "error" 
        ? `${entity.type}${entity.direction.charAt(0).toUpperCase()}${entity.direction.slice(1)}`
        : "grass"

    return (
        <TileWrapper 
            entityImage={entityImage}
            terrain={terrain} 
            backgroundSize={backgroundSize}>
        </TileWrapper>
    )
}


export const TileWrapper = styled.div`
    font-size: 5vh;
    justify-content: center;
    color: black;
    border: 0.1vh solid mediumseagreen;
    pointer-events: all;
    background-color: lightgreen;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${props => tileImageMap[props.entityImage]}),
        url(${props => tileImageMap[props.terrain]});
    background-size: ${props => props.backgroundSize ?? '100%'};
`;
