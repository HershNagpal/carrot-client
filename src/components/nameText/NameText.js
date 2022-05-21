import styled from 'styled-components';

export const NameText = ({text}) => (
    <NameTextWrapper>
        {text}
    </NameTextWrapper>
);

const NameTextWrapper = styled.div`
    font-size: 2.5rem;
    font-family: sans-serif;
    text-align: center;
`;