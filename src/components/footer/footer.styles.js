import styled, { css } from 'styled-components';

import { ReactComponent as GithubLogo } from './github.svg';
import { ReactComponent as LinkedinLogo } from './linkedin.svg';
import { ReactComponent as TwitterLogo } from './twitter.svg';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 48rem;
  }
`;

export const Copyright = styled.span`
  font-size: 0.9rem;
  color: ${props => props.font};
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Links = styled.a`
  margin: 0 8px;

  svg path {
    fill: ${props => props.colorFont3};
  }

  @media screen and (min-width: 1024px) {
    &:hover {
      svg path {
        fill: ${props => props.colorFont1};
      } 
    }
  }
`;

const logoStyles = css`
  width: 1.2rem;
  height: 1.2rem;

  @media screen and (min-width: 1024px) {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const Github = styled(GithubLogo)`
  ${logoStyles}
`;

export const Linkedin = styled(LinkedinLogo)`
  ${logoStyles}
`;

export const Twitter = styled(TwitterLogo)`
  ${logoStyles}
`;