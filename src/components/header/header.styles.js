import styled from 'styled-components';

export const HeaderContainer = styled.div`
    // background-color: #121212;
    // color: white;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoContainer = styled.div`
    .brand-name {
        text-decoration: none;
        color: inherit;   

        h1 {
            transition: 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
            font-size: 1.2rem;
            opacity: 0.87;
            padding: 0.8rem;
        }

        &:hover {
            h1 {
                cursor: pointer;
                opacity: 0.7;
            }
        }
    }

    @media screen and (min-width: 768px) {
        .brand-name {
            h1 {
                font-size: 1.5rem;
                padding: 1rem;
            }
        }
    }
`;

export const MenuContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const MenuItem = styled.li`
    list-style-type: none;
    display: inline-block;
`;

export const MenuButton = styled.button`
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0.5rem;
    color: ${props => props.iconcolor};
    background-color: inherit;
    transition: 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

    &:hover {
        color: ${props => props.hovercolor};
        opacity: 0.7;
        cursor: pointer;
    }

    .material-icons {
        font-size: 2rem;
    }

    @media screen and (min-width: 768px) {
        padding: 1rem;

        .material-icons {
            font-size: 2.2rem;
        }
    }
`;