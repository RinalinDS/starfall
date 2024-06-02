import { styled } from 'styled-components';
import RightArrow from './../../assets/rightarrow.svg?react';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { Typography } from '@mui/material';

export const ReadlistPanel = () => {
  return (
    <Container>
      <Title>
        <a href="#" className="link">
          From your Readlist <RightArrow className="icon" />
        </a>
      </Title>
      <ContentContainer>
        <SvgContainer>
          <BsFillBookmarkPlusFill fontSize={'36px'} className="icon" />
        </SvgContainer>
        <div>
          <Typography variant="h4" textAlign={'center'} fontSize={'2.4rem'}>
            Your readlist is empty
          </Typography>
          <Typography
            variant="body1"
            textAlign={'center'}
            fontSize={'1.6rem'}
            marginTop={'1.2rem'}
          >
            Save books to keep track of what you want to read
          </Typography>
        </div>
        <div></div>
        <button> browse popular movies</button>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 4.8rem 0;
  font-size: 1.6rem;
  position: relative;
`;

const SvgContainer = styled.div`
  position: relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 10%;
    left: 30%;
    height: 60%;
    width: 50%;
    background-color: ${({ theme }) => theme.text.fill};
  }
  & .icon {
    position: relative;
    z-index: 2;
    fill: ${({ theme }) => theme.text.stroke};
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 2.4rem;
  align-items: center;

  color: ${({ theme }) => theme.text.primary};

  > :last-child {
    margin-top: 2rem;
  }
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
