import styled from 'styled-components';

export const ProjectItemContainer = styled.a`
  text-decoration: none;
  background-color: ${props => props.bg};
  box-shadow: ${props => props.shadow1};
  border-radius: 0.375rem;
  overflow: hidden;
  height: unset;
  width: 100%;
  margin: 1rem 0;
  display: grid;

  @media screen and (min-width: 768px) {
    height: 11rem;
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr 2fr;
  }

  &:hover {
    cursor: pointer;
    box-shadow: ${props => props.shadow2};
  }
`;

export const Thumbnail = styled.img`
  background-color: ${props => props.bg};
  height: 240px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 100%;
    width: 100%;
    grid-column: 1 / 2;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: #17b794;
`;

export const Description = styled.span`
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 1.2rem 0;
  color: ${props => props.font};
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  font-size: 0.8rem;
  color: ${props => props.font};
  background-color: ${props => props.bg};
  padding: 3px 10px;
  width: fit-content;
  border-radius: 9999px;
  margin-right: 7px;
  margin-bottom: 7px;
`;