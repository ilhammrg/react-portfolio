import styled from 'styled-components';

export const HeaderContainer = styled.div`
    // background-color: #393e46;
    // background-color: #232931;
    background-color: #121212;
    color: white;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoContainer = styled.div`
    .brand-name {
        font-size: 28px;
        opacity: 0.87;

        &:hover {
            cursor: pointer;
        }
    }
`;

export const MenuContainer = styled.ul`
    display: flex;
    width: 100px;
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
    padding: 0;
    color: white;
    background-color: inherit;
    transition: 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

    &:hover {
        color: ${props => props.hovercolor};
        cursor: pointer;
    }

    .material-icons {
        font-size: 35px;
    }
`;