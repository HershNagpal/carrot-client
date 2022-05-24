import styled from 'styled-components';
import React from 'react';
import { openInventory } from '../../gameContext/actions';
import { GameContext } from '../../gameContext';

export const TitleText = ({gridArea, text}) => {

    const [_, dispatch] = React.useContext(GameContext);

    return (
        <TitleTextWrapper gridArea={gridArea} onClick={() => dispatch(openInventory())}>
            {text}
        </TitleTextWrapper>
    )
};

const TitleTextWrapper = styled.div`
    font-size: 2.5rem;
    font-family: sans-serif;
    color: white;
    grid-area: ${props => props.gridArea};
`;