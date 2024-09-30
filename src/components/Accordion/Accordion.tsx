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
    <div>
      <Title onClick={toggleAccordion}>Show more options</Title>
      {isOpen ? <div>{children}</div> : null}
    </div>
  );
};

const Title = styled.div`
  text-align: center;
`;
