import { ReactNode, useState } from 'react';
import { styled } from 'styled-components';

type Props = {
  children: ReactNode;
};

export const Accordion = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Title onClick={toggleAccordion}>
        Show {isOpen ? 'less' : 'more'} options
      </Title>
      {isOpen ? <div>{children}</div> : null}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.div`
  text-align: center;
`;
