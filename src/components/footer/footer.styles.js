import styled from 'styled-components';

export const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3rem; 
`;

export const FooterContent = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 190px;

    .footer-heart-icon {
        color: salmon;
        font-size: 20px;
    }
`;