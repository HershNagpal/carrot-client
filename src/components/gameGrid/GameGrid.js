import { Tile } from '../tile/Tile';
import styled from 'styled-components';
import { defaultGameGrid } from './sampleGameGrid';

const GridWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(15, 1fr);
    grid-template-columns: repeat(15, 1fr);
    grid-area: ${props => props.gridArea};
`;

export const GameGrid = ({gridArea, gameGridState}) => (
    <GridWrapper gridArea={gridArea}>
        {
            (gameGridState ? gameGridState : defaultGameGrid).map(
                (e,i) => <Tile backgroundImage={e.backgroundImage} key={`tile-${i}`}/>
            )
        }
    </GridWrapper>
);

