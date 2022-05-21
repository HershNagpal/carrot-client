import styled from 'styled-components';

export const TextLog = ({log}) => (
    <TextLogWrapper>
        {
            (log ?? []).map(
                (e) => <Text>{e}</Text>
            )
        }
    </TextLogWrapper>
);

const TextLogWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    font-size: 1rem;
    font-family: sans-serif;
    line-height: 4vh;
    height: 20vh;
    width: 30vw;
    -webkit-mask-image: linear-gradient(to top, black 0%, transparent 100%);
    mask-image: linear-gradient(to top, black 0%, transparent 100%);
`;

const Text = styled.div`
`;