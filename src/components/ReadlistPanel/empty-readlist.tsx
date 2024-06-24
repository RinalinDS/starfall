import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { styled } from 'styled-components';
import { Typography } from '../../UI-kit/Typography/Typography';

export const EmptyReadlist = () => {
  return (
    <ContentContainer>
      <SvgContainer>
        <BsFillBookmarkPlusFill fontSize={'36px'} className="icon" />
      </SvgContainer>
      <TextContainer>
        <Typography variant="h5">Your readlist is empty</Typography>
        <Typography variant="body1">
          Save books to keep track of what you want to read
        </Typography>
      </TextContainer>
      <div>
        <PopularLink href="#" className="popularLink">
          <span>Browse popular books</span>
        </PopularLink>
      </div>
    </ContentContainer>
  );
};

const TextContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 1.2rem;
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

const PopularLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-transform: none;
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  background-color: ${({ theme }) => theme.background.secondary};
  padding: 0 3.6rem;
  min-height: 3.2rem;
  border-radius: 4px;
  letter-spacing: 0.5px;
  transition: all 0.2s ease-in-out;
  &:link,
  &:visited,
  &:active {
    color: #3887be;
  }
  &:hover {
    filter: brightness(150%);
  }
`;
