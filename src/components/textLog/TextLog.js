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
    font-size: 2.5rem;
    font-family: sans-serif;
    text-align: center;
`;

const Text = styled.div`
`;