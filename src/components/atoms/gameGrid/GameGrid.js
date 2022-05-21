import { Tile } from '../tile/Tile';
import grassImage from '../assets/grass.png';
import styled from 'styled-components';

const GridWrapper = styled.div`
    display: inline-grid;
    grid-template-rows: repeat(15, 1fr);
    grid-template-columns: repeat(15, 1fr);
`;

export const GameGrid = () => <>
    <GridWrapper>
        {
            Array(225).fill(0).map(
                (_,i) => <Tile backgroundImage={grassImage} key={`tile-${i}`}/>
            )
        }
    </GridWrapper>
</>;

//backgroundImage={backgroundMap[i]}

