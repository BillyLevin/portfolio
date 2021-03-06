import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import Link from './Link';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.colors.dark[0]};
  color: ${(props) => props.theme.colors.light[0]};
  text-align: center;
  padding: 1.6rem;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.small}) {
    font-size: 1.2rem;
  }

  a:link,
  a:visited {
    text-decoration: none;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <span>
        <Link
          href="https://github.com/billylevin/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          variant="link"
          primaryColor={theme.colors.primary[0]}
        >
          View source code
        </Link>
      </span>
    </FooterContainer>
  );
};

export default Footer;
