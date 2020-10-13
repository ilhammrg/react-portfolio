import styled from 'styled-components';

export const HomepageContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0;

  @media screen and (min-width: 768px) {
    width: 48rem;
  }
`;