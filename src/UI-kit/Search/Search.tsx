import { ChangeEvent, FC, memo, useCallback, useState } from 'react';
import { GlassIcon } from './GlassIcon.tsx';
import styled from 'styled-components';

type Props = {
  onClick: (value: string) => void;
};
export const Search: FC<Props> = memo(({ onClick }) => {
  const [search, setSearch] = useState<string>('');

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  }, []);

  const handleSearch = useCallback(() => {
    onClick(search);
    setSearch('');
  }, [onClick]);

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search IBDb..."
        onChange={onChangeHandler}
        value={search}
      />
      <Button onClick={handleSearch}>
        <GlassIcon />
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
  padding: 0.4rem;
  padding-left: 0.8rem;
  border: 1px solid #ccc;
  border-left: none;

  & svg {
    width: 2rem;
    height: 1rem;
    fill: var(--color-primary);

    &:active {
      transform: translateY(2px);
    }
  }
`;
