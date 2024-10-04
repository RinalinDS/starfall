import { ReactNode, useState } from 'react';
import { styled } from 'styled-components';

type Props = {
  children: ReactNode;
};

export const ShowMoreOptions = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      {isOpen ? (
        children
      ) : (
        <Title onClick={toggleAccordion}>Show more options</Title>
      )}
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
