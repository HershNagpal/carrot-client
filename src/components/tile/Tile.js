import styled from 'styled-components';
import { tileImageMap } from '../assets/tileImageMap';

export const Tile = styled.div`
    font-size: 5vh;
    justify-content: center;
    color: black;
    border: 0.1vh solid mediumseagreen;
    pointer-events: all;
    background-color: lightgreen;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${props => tileImageMap[props.backgroundImage]});
    background-size: ${props => props.backgroundSize ?? '100%'};
`;
