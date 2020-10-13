import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 48rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 1rem 0;
  }
`;

export const BrandLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 0.8rem;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    padding: 1rem;
  }
`;

export const MenuButton = styled.button`
  font-size: 100%;
  font-family: inherit;
  border: none;
  outline: none;
  padding: 0.5rem;
  color: #f9d276;
  background-color: inherit;
  transition: 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  &:hover {
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