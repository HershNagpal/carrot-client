import styled from 'styled-components';

export const ProgressBar = styled(UnstyledProgressBar)`
    background-color: ${props => props.backgroundColor};
`;

const Bar = styled.div`
    background-color: ${props => props.backgroundColor};
    width: ${props => ((props.maxValue / props.currentValue) * 100) + "%"};
`;

const BarText = styled.div`
    position: relative;
    text-align: center;
`

const UnstyledProgressBar = ({maxValue, currentValue, barColor, backgroundColor}) => (
    <div>
        <Bar backgroundColor={barColor}/>
        <BarText>
            {`${currentValue}/${maxValue}`}
        </BarText>
    </div>
);