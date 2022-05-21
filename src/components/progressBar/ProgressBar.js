import styled from 'styled-components';

export const UnstyledProgressBar = ({maxValue, currentValue, barColor, backgroundColor}) => (
    <div>
        <Bar backgroundColor={barColor}/>
    </div>
);

const ProgressBar = styled(UnstyledProgressBar)`
    background-color: ${props => props.backgroundColor};
    width: 100px;
    height: 10px;
`;

const Bar = styled.div`
    background-color: ${props => props.backgroundColor};
    width: 100px;
    height: 10px;
`;

const BarText = styled.div`
    position: relative;
    text-align: center;
`;

/*
${props => ((props.maxValue / props.currentValue) * 100) + "%"};
maxValue, currentValue, barColor, backgroundColor
<Bar backgroundColor={barColor}/>
        <BarText>
            {`${currentValue}/${maxValue}`}
        </BarText>
*/
