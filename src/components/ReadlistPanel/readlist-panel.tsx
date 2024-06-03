import { styled } from 'styled-components';
import RightArrow from './../../assets/rightarrow.svg?react';
import { EmptyReadlist } from './empty-readlist';

export const ReadlistPanel = () => {
  const isReadlistEmpty = true;
  return (
    <Container>
      <Title>
        <a href="#" className="link">
          From your Readlist <RightArrow className="icon" />
        </a>
      </Title>
      {isReadlistEmpty ? (
        <EmptyReadlist />
      ) : (
        <div>mapped array of readlist cards</div>
      )}
    </Container>
  );
};

const Container = styled.section`
  padding: 4.8rem 0;
  font-size: 1.6rem;
  position: relative;
`;

const Title = styled.h3`
  display: inline-block;
  position: relative;
  color: ${({ theme }) => theme.text.primary};
  & .link,
  & .link:link,
  & .link:visited,
  & .link:active {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.4;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    text-decoration: none;
    color: inherit;
  }
  &:hover .icon {
    fill: #f5c518;
  }
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
  & .icon {
    fill: #fff;
    width: 1.8rem;
  }
`;
