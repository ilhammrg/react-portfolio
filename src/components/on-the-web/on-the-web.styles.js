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
            display: block;
            text-decoration: none;
            color: inherit;
            font-size: 1rem;
            transition: 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

            &:hover {
                transform: translateY(-5px);
            }
        }
    }

    @media screen and (min-width: 450px) {
        ul {
            width: 350px
        }

        li {
            a {
                font-size: 1.1rem;
            }
        }
    }
`;