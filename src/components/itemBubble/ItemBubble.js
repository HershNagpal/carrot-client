import styled from 'styled-components';

const ItemBubbleContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: ${props => props.gridArea};
    padding: 10%;
`;

const ItemBubbleWrapper = styled.div`
    position: relative;
    border-radius: 100%;
    aspect-ratio: 1;
    background-color: ${props => props.backgroundColor};
`;

const ItemBubbleText = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    color: white;
    font-size: ${props => props.fontSize};
    font-family: sans-serif;
`;

export const ItemBubble = ({backgroundColor, fontSize, className, gridArea, text}) => (
    <ItemBubbleContainer className={className} gridArea={gridArea}>
        <ItemBubbleWrapper backgroundColor={backgroundColor}>
            <ItemBubbleText fontSize={fontSize}>
                {text}
            </ItemBubbleText>
        </ItemBubbleWrapper>
    </ItemBubbleContainer>
);
