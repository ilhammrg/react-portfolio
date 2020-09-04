import styled from 'styled-components';

export const HomepageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
`;

export const HomepageContent = styled.span`
    // color: white;
    font-size: 1.5rem;
    transition: 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 1024px) {
        font-size: 4rem;
    }
`;

export const HomepageContentLastLine = styled.span`
    // color: white;
    font-size: 1.1rem;
    transition: 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

    @media screen and (min-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (min-width: 1024px) {
        font-size: 3rem;
    }
`;