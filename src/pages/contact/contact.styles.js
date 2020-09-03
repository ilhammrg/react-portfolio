import styled from 'styled-components';

export const ContactContainer = styled.div`
    padding: 20vh 0;
    text-align: center;

    a {
        display: block;
        text-decoration: none;
        color: #4ecca3;
        transition: 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

        &:hover {
            opacity: 0.7;
        }
    }
`;