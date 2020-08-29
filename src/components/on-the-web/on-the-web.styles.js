import styled from 'styled-components';

export const OnTheWebContainer = styled.div`
    ul {
        display: flex;
        justify-content: space-around;
        width: 35%;
        margin: auto;
    }

    li {

        list-style-type: none;
        display: inline-block;

        a {
            text-decoration: none;
            color: inherit;
        }
    }
`;