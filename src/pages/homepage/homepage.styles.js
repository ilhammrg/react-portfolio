import styled from 'styled-components';

export const HomepageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30vh;
`;

export const HomepageContent = styled.span`
    color: white;
    font-size: 25px;

    @media screen and (min-width: 450px) {
        font-size: 40px
    }

    @media screen and (min-width: 800px) {
        font-size: 65px
    }
`;

export const HomepageContentLastLine = styled.span`
    color: white;
    font-size: 18px;

    @media screen and (min-width: 450px) {
        font-size: 28px
    }

    @media screen and (min-width: 800px) {
        font-size: 48px
    }
`;