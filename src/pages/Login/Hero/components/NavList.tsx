import { FC } from 'react';
import { styled } from 'styled-components';

type Props = {
  items: { id: number; name: string }[];
};

export const NavList: FC<Props> = ({ items }) => {
  return (
    <List>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <a href="#">{item.name}</a>
          </li>
        );
      })}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  & a {
    text-decoration: none;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.text.hero};

    &:hover {
      text-decoration: underline;
    }
  }
`;
