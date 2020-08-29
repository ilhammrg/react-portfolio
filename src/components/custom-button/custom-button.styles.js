import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ButtonContent = styled(Link)`
    display: inline-block;
    text-decoration: none;
    color: white;
    width: 200px;
    background-color: ${props => props.buttoncolor || "black"};
    margin: 10px;
    padding: 10px;
    border-radius: 6.5px;
    text-align: center;
    transition: 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

    &:hover {
        opacity: 0.5;
    }
`;