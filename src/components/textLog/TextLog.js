import styled from 'styled-components';

export const TextLog = ({gridArea, log, className }) => (
    <TextLogWrapper gridArea={gridArea} className={className}>
        {
            (log ?? []).map(
                (e,i) => <Text key={`text-${i}`}>{e}</Text>
            )
        }
    </TextLogWrapper>
);

const TextLogWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    grid-area: ${props => props.gridArea};
    font-size: 1.5rem;
    color: white;
    font-family: sans-serif;
    line-height: 2rem;
    -webkit-mask-image: linear-gradient(to top, black 0%, transparent 100%);
    mask-image: linear-gradient(to top, black 0%, transparent 100%);
`;

const Text = styled.div`
`;