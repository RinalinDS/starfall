import { styled } from 'styled-components';
import { useSliderData } from '../../hooks/useSliderData';
import { Carousel } from '../Carousel/Carousel';
import { UpNext } from '../UpNext/UpNext';

export const CarouselPanel = () => {
  const {
    changeNextSlide,
    changePrevSlide,
    currentSlide,
    firstThreeSlides,
    setActiveSlide,
  } = useSliderData();

  return (
    <Container>
      <Carousel
        mainSlide={currentSlide}
        changeNextSlide={changeNextSlide}
        changePrevSlide={changePrevSlide}
      />
      <UpNext upNextSlides={firstThreeSlides} setActiveSlide={setActiveSlide} />
    </Container>
  );
};

const Container = styled.section`
  grid-column: span 3;
  padding: 2.4rem 0;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;
