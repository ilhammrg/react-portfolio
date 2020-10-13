import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const NotFoundContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: #858585;
  margin: 10px 0;
`;

export const ReturnLink = styled(Link)`
  color: #17b794;
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;