import { styled } from 'styled-components';

export const ButtonAbsolute = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem 0.5rem;
  background-color: black;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  clip-path: polygon(
    50% 0%,
    100% 0,
    100% 49%,
    100% 100%,
    100% 100%,
    50% 65%,
    0 100%,
    0 100%,
    0% 35%,
    0 0
  );
  & svg {
    fill: currentColor;
    font-size: 2.4rem;
    position: relative;
    bottom: 6px;
  }
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;
