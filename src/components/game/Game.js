import styled from 'styled-components';
import { GameGrid } from '../gameGrid/GameGrid';

const GameWrapper = styled.div`
    background-color: #333333;
    display: grid;
    padding: 0;
    height: 100vh;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "GameArea RightUI"; 
`;

export const Game = ({}) => (
    <GameWrapper>
        <GameGrid/>
        <div>RIGHT UI</div>
    </GameWrapper>
);