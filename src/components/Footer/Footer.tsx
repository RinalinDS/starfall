import { styled } from 'styled-components';
import logo from './../../assets/logo.png';
import { contactItems } from './data';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <div className="contacts">
          <span>Contact the creator</span>
          <ul className="contactList">
            {contactItems.map(({ href, icon, id }) => {
              return (
                <li key={id}>
                  <a className="link" href={href}>
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul className="adminList">
            <li>
              <a className="link" href="#">
                privacy policy
              </a>
            </li>
            <li>
              <a className="link" href="#">
                condition of use
              </a>
            </li>
            <li>
              <a className="link" href="#">
                press room
              </a>
            </li>
            <li>
              <a className="link" href="#">
                help
              </a>
            </li>
          </ul>
        </div>
        <ImageContainer>
          <img src={logo} alt="imdb logo" className="logo" />
        </ImageContainer>
        <div className="copyright">© 2024 by Denis Pilyutin.</div>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.background.secondary};
  width: 100%;
  flex: 0 0 auto;
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.6rem;
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 2.4rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  & .contacts {
    display: grid;
    width: 50%;
    justify-content: center;
    gap: 1.6rem;
    border: 2px solid ${({ theme }) => theme.border.primary};
    border-radius: 1rem;
    padding: 1.2rem 4.8rem;
    & .link {
      color: ${({ theme }) => theme.text.secondary};

      text-decoration: none;
      &:hover {
        color: ${({ theme }) => theme.text.primary};
        text-decoration: underline;
      }
    }
    svg {
      font-size: 2.4rem;
    }
    span {
      font-size: 2rem;
      line-height: 2.4rem;
      letter-spacing: 0.25px;
      font-weight: 600;
    }
  }

  & .copyright {
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.03rem;
    color: ${({ theme }) => theme.text.secondary};
    text-align: center;
  }
  & ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    justify-content: center;
  }

  & .adminList {
    text-transform: capitalize;
    padding: 0.8rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    letter-spacing: 0.5px;
    & .link {
      color: ${({ theme }) => theme.text.secondary};

      text-decoration: none;
      &:hover {
        color: ${({ theme }) => theme.text.primary};
        text-decoration: underline;
      }
    }
  }
`;

const ImageContainer = styled.div`
  width: 7.2rem;
  & img {
    width: 7.2rem;
  }
`;
