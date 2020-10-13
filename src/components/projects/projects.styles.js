import styled from 'styled-components';

export const ProjectsContainer = styled.aside`
  width: 100%;
  margin: 2.5rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 48rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin: 1rem 0;
`;