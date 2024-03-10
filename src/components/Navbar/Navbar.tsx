import { IoSearch } from 'react-icons/io5';
import { MdMyLocation, MdOutlineLocationOn, MdWbSunny } from 'react-icons/md';
import { styled } from 'styled-components';

export const Navbar = () => {
  return (
    <Header>
      <Container>
        <Logo>
          <h2>Weather</h2>
          <SunIcon />
        </Logo>

        <FormContainer>
          <LocationContainer>
            <MdMyLocation />
            <MdOutlineLocationOn />
            <p>Kiev</p>
          </LocationContainer>
          <Form>
            <Input type="text" />
            <Button>
              <IoSearch />
            </Button>
          </Form>
        </FormContainer>
      </Container>
    </Header>
  );
};

const Header = styled.nav`
  position: sticky;
  background-color: ${({ theme }) => theme.background.secondary};
  top: 0;
  left: 0;
`;

const Container = styled.div`
  height: 8rem;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 128rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  & p {
    color: ${({ theme }) => theme.text.darkGrey};
    font-size: 2.4rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & h2 {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.text.darkGrey};
  }
`;

const SunIcon = styled(MdWbSunny)`
  color: rgb(253 224 71);
  margin-top: 0.4rem;
  font-size: 3.2rem;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  & svg:hover {
    cursor: pointer;
    color: grey;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  height: 4rem;
`;

const Input = styled.input`
  outline: none;
  height: 100%;
  padding: 0.4rem 0.8rem;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-width: 1px;
  &:focus {
    border-color: rgb(59 130 246);
  }
`;

const Button = styled.button`
  height: 100%;
  padding: 0.8rem 1.6rem;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: rgb(59 130 246);
  border: none;
`;
