import { styled } from 'styled-components';
import { NavList } from './NavList';

const FooterList = [
  {
    id: 1,
    name: 'About',
  },
  { id: 2, name: 'Contact Us' },
];

export const HeroFooter = () => {
  return (
    <Footer>
      <nav>
        <NavList items={FooterList} />
      </nav>
    </Footer>
  );
};

const Footer = styled.footer`
  height: 6.4rem;
`;
