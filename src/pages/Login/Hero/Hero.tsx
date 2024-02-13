import { styled } from 'styled-components';
import { HeroFooter } from './components/HeroFooter';
import { HeroHeader } from './components/HeroHeader';

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroHeader />
        <Main>
          <ImageContainer>
            <SubTitle>All collections</SubTitle>
            <Image />
            <Title>
              <span className="firstPart">Creat</span>
              <span className="secondPart">ive</span>
              <span className="thirdPart">Boutique</span>
            </Title>
            <SubTitle>Fancy suits</SubTitle>
          </ImageContainer>
        </Main>
        <HeroFooter />
      </Container>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  background: ${({ theme }) => theme.background.hero};
  padding: 3.2rem 6.4rem;
  color: ${({ theme }) => theme.text.hero};
  height: 100vh;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 33%;
  height: 100%;
  gap: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('./../src/assets/Model-Image.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  font-size: 6.4rem;
  letter-spacing: 2px;
  & .firstPart {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-100%, -150%);
  }
  & .secondPart {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0%, -150%);
  }
  & .thirdPart {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(60%, 150%);
  }
`;

const SubTitle = styled.h2`
  font-size: 3.6rem;
`;
