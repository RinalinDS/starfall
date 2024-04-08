import { ChangeEvent, FC } from 'react';
import { styled } from 'styled-components';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const BorderlessInput: FC<Props> = ({ onChange, value }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };
  return (
    <InputContainer>
      <Input
        id="name"
        value={value}
        onChange={onChangeHandler}
        placeholder="Name"
      />
      <label htmlFor="name">Name</label>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
  font-size: 1.4rem;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  outline: none;
  border-bottom: 2px solid gray;
  transition: all 0.2s;
  &::placeholder {
    color: transparent;
  }
  & ~ label {
    position: absolute;
    top: -20px;
    left: 0;
  }
  &:placeholder-shown ~ label {
    position: absolute;
    top: 0;
    left: 0;
  }
  &:focus {
    border-width: 3px;
    border-image: linear-gradient(to right, yellow, green);
    border-image-slice: 1;
  }

  &:focus ~ label {
    position: absolute;
    top: -20px;
    left: 0;
    color: yellowgreen;
  }
`;
