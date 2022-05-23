import styled from 'styled-components';

export const TitleText = ({gridArea, text}) => (
    <TitleTextWrapper gridArea={gridArea}>
        {text}
    </TitleTextWrapper>
);

const TitleTextWrapper = styled.div`
    font-size: 2.5rem;
    font-family: sans-serif;
    color: white;
    grid-area: ${props => props.gridArea};
`;