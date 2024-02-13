import { styled } from 'styled-components';

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Header>
          <nav>
            <NavList>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
            </NavList>
          </nav>
        </Header>
        <Main>
          <SubTitle>All collections</SubTitle>
          <Content>
            <ImageContainer>
              <Title>
                <span className="firstPart">Creat</span>
                <span className="secondPart">ive</span>
                <span className="thirdPart">Boutique</span>
              </Title>

              {/* <img src={ModelImage} alt="model-image" /> */}
            </ImageContainer>
          </Content>
          <SubTitle>Fancy suits</SubTitle>
        </Main>
        <Footer>
          <nav>
            <NavList>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </NavList>
          </nav>
        </Footer>
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
  padding: 1.8rem 3.6rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.header`
  height: 6.4rem;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`;

const Content = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 33%;
  height: 100%;
  background-image: url('./../src/assets/Model-Image.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Footer = styled.footer`
  height: 6.4rem;
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
  margin: 1.2rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  & a {
    text-decoration: none;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.text.hero};

    &:hover {
      text-decoration: underline;
    }
  }
`;
