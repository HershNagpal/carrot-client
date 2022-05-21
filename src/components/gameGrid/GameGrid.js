import { Tile } from '../tile/Tile';
import styled from 'styled-components';
import { defaultGameGrid } from './sampleGameGrid';

const GridWrapper = styled.div`
    display: inline-grid;
    justify-self: center;
    align-self: center;
    aspect-ratio: 1;
    height: 90%;
    grid-template-rows: repeat(15, 1fr);
    grid-template-columns: repeat(15, 1fr);
`;

export const GameGrid = ({gameGridState}) => <>
    <GridWrapper>
        {
            (gameGridState ? gameGridState : defaultGameGrid).map(
                (e,i) => <Tile backgroundImage={e.backgroundImage} key={`tile-${i}`}/>
            )
        }
    </GridWrapper>
</>;

