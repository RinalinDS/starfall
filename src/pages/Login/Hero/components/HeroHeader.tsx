import { styled } from 'styled-components';
import { NavList } from './NavList';

const HeaderList = [
  {
    id: 1,
    name: 'Home',
  },
  { id: 2, name: 'Work' },
];

export const HeroHeader = () => {
  return (
    <Header>
      <nav>
        <NavList items={HeaderList} />
      </nav>
    </Header>
  );
};

const Header = styled.header`
  height: 6.4rem;
`;
