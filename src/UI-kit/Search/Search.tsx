import { ChangeEvent, memo, useCallback, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

export const Search = memo(() => {
  const [search, setSearch] = useState<string>('');

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  }, []);

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search IBDb..."
        onChange={onChangeHandler}
        value={search}
        name={'search'}
      />
      <Button type="submit">
        <FaSearch />
      </Button>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
`;

const Input = styled.input`
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem 0 0 0.5rem;
  outline: none;
  border-right: none;
  width: 100%;
`;
const Button = styled.button`
  background-color: #fff;
  border-radius: 0 0.5rem 0.5rem 0;
  cursor: pointer;
  padding: 0.8rem;
  padding-left: 1rem;
  border: 1px solid #ccc;
  border-left: none;

  & svg {
    width: 3.2rem;
    height: 1.6rem;
    fill: var(--color-primary);

    &:active {
      transform: translateY(2px);
    }
  }
`;
