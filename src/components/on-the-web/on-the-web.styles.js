import styled from 'styled-components';

export const OnTheWebContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5rem; 

    ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 300px;
        margin: auto;
    }

    li {
        list-style-type: none;
        display: inline-block;

        a {
            text-decoration: none;
            color: inherit;
            font-size: 0.8em;
        }
    }

    @media screen and (min-width: 450px) {
        ul {
            width: 350px
        }

        li {
            a {
                font-size: 1em;
            }
        }
    }
`;