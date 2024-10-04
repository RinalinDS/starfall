import { styled } from 'styled-components';
import { AccordionGroup } from '../../components/Accordion/AccordionGroup';

export const Readlist = () => {
  return (
    <Container>
      {/* temp  for test purpose */}
      <AccordionGroup />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  flex: 1;

  header {
    width: 100%;
  }
`;
