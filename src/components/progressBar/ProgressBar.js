import styled from 'styled-components';

export const ProgressBar = ({className, gridArea, height, fontSize, maxValue, currentValue, barColor, backgroundColor}) => {

    

    return (
        <BarContainer className={className} gridArea={gridArea}>
            <OuterBar height={height} backgroundColor={backgroundColor}>
                <BarText fontSize={fontSize}>{`${currentValue} / ${maxValue}`}</BarText>
                <InnerBar backgroundColor={barColor} maxValue={maxValue} currentValue={currentValue}/>
            </OuterBar>
        </BarContainer>
    )
};

const BarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-area: ${props => props.gridArea};
`;

const OuterBar = styled.div`
    position: relative;
    background-color: ${props => props.backgroundColor};
    min-height: 10px;
    align-self: center;
    justify-self: center;
    height: ${props => props.height};
    border: 2px solid black;
    border-radius: 5rem;
    width: 100%;
`;

const InnerBar = styled.div`
    background-color: ${props => props.backgroundColor};
    width: ${props => (
        (
            Math.min(props.currentValue, props.maxValue) / props.maxValue
        ) * 100
    ) + "%"};
    border-radius: 5rem;
    height: 100%;
`;

const BarText = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-size: ${props => props.fontSize};
    font-family: sans-serif;
`;