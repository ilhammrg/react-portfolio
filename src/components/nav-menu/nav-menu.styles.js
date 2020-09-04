import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    width: 100%;
    transform: translate(0, -100vh);
    transition: transform 0.3s ease-in-out;
    background-color: rgba(0,0,0,0.8);

    li {
        list-style-type: none;
    }

    button {
        padding: 0;
        border: none;
        background-color: transparent;
        color: white;

        span {
            font-size: 2.5rem;
        }

        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
    }

    @media screen and (min-width: 768px) {
        button {
            span {
                font-size: 3.5rem;
            }
        }
    } 
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 2rem;

    &:hover {
        opacity: 0.7;
    }

    @media screen and (min-width: 768px) {
        font-size: 3rem;
    }
`;