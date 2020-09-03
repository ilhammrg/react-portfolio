import styled from 'styled-components';

export const ProjectContainer = styled.div`
    padding: 20vh 0;

    h2 {
        text-align: center;
    }
`;

export const ProjectList = styled.div`
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ProjectCard = styled.div`
    padding: 10px;
    width: 200px;
    background-color: #2c2c2c;
    border-radius: 8px;

    a {
        display: block;
        text-decoration: none;
        color: white;
        transition: 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

        &:hover {
            opacity: 0.7;
        }
    }
`;