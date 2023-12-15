import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};
export const ShadowButton: FC<Props> = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

const Button = styled.button`
  max-width: 16rem;
  word-break: break-all;
  padding: 1rem 2rem;
  color: #fff;
  background-color: ${({ theme }) => theme.cta.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.4rem;
  transition: all 0.4s ease-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.cta.secondary};
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.cta.tertiary};
  }
`;
