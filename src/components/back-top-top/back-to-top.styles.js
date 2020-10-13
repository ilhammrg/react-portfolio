import styled from 'styled-components';

export const BackToTopContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const TopLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${props => props.color};
`;

export const ArrowIcon = styled.span`
  font-size: 1.8rem;
`;

export const Text = styled.span`
  font-size: 1rem;
  margin-left: 5px;
  font-weight: 500;
`;