import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background-color: #121212;
    color: white;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 600px) {
        padding: 30px;
    }
`;

export const LogoContainer = styled.div`
    .brand-name {
        font-size: 15px;
        opacity: 0.87;

        &:hover {
            cursor: pointer;
        }
    }

    @media screen and (min-width: 450px) {
        .brand-name {
            font-size: 28px;
        }
    }
`;

export const MenuContainer = styled.ul`
    display: flex;
    width: 70px;
    flex-direction: row;
    justify-content: space-around;

    @media screen and (min-width: 450px) {
        width: 100px;
    }
`;

export const MenuItem = styled.li`
    list-style-type: none;
    display: inline-block;
`;

export const MenuButton = styled.button`
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0;
    color: ${props => props.iconcolor};
    background-color: inherit;
    transition: 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

    &:hover {
        color: ${props => props.hovercolor};
        opacity: 0.7;
        cursor: pointer;
    }

    .material-icons {
        font-size: 20px;
    }

    @media screen and (min-width: 450px) {
        .material-icons {
            font-size: 35px;
        }
    }
`;