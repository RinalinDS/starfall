import { styled } from 'styled-components';
import { Slide } from './Slide';
import { Book } from '../../../mocks/sliderData.mock';

type Props = {
  upNextSlides: Book[];
};

export const UpNextSlider = ({ upNextSlides }: Props) => {
  return (
    <Container>
      {upNextSlides.map((slide) => {
        return <Slide key={slide.id} slide={slide} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  // вот такое сочетание height+flexgrow работает чтобы контейнер занимал высоту
  flex-grow: 1;
  height: 100%;
  padding: 1rem;
  color: ${({ theme }) => theme.text.primary};

  justify-content: space-between;
  gap: 1rem;
  border-radius: 9px;

  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.secondary};
`;