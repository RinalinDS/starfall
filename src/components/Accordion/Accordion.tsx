import { Dispatch, SetStateAction, memo } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import { styled } from 'styled-components';

type Props = {
  title: string;
  content: string;
  isActive: boolean;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  index: number;
};

export const Accordion = memo(
  ({ title, content, isActive, setActiveIndex, index }: Props) => {
    const toggleAccordion = () => {
      setActiveIndex((prev) => (prev === index ? -1 : index));
    };
    return (
      <Container>
        <AccordionTitle onClick={toggleAccordion}>
          {title} {isActive ? <FaArrowDown /> : <FaArrowRight />}
        </AccordionTitle>
        {isActive && <AccordionContent>{content}</AccordionContent>}
      </Container>
    );
  }
);

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.4rem;
`;

const AccordionTitle = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.background.tertiary};
  padding: 1.2rem 2.4rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 1.6rem;
  border-radius: 9px;
`;

const AccordionContent = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background.hero};
  color: yellow;
  padding: 1.2rem 2.4rem;
  border-radius: 9px;
`;
