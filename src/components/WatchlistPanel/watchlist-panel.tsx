import { styled } from 'styled-components';
import RightArrow from './../../assets/rightarrow.svg?react';

export const WatchlistPanel = () => {
  return (
    <Container>
      <Title>
        From Your Readlist <RightArrow />
      </Title>
      <div>
        <div>icon</div>
        <div>your watchlist is emopty</div>
        <div>Save books to keep track of what you want to read</div>
        <button> browse popular movies</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 4.8rem 0;
  font-size: 1.6rem;
`;

const Title = styled.h3`
  position: relative;
  &::before {
    background: #f5c518;
    border-radius: 4px;
    content: '';
    margin-left: -1.5rem;
    align-self: flex-start;
    position: absolute;
    height: 100%;
    width: 4px;
  }
`;
