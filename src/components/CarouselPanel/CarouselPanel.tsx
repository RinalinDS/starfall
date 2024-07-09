import { styled } from 'styled-components';
import { Carousel } from '../Carousel/Carousel';
import { UpNext } from '../UpNext/UpNext';
import { Book, sliderData } from '../../mocks/sliderData.mock';
import { useMemo, useState } from 'react';

export const CarouselPanel = () => {
  const [currentSlide, setCurrentSlide] = useState<Book>(sliderData[0]);
  const [upNextSlides, setUpNextSlides] = useState<Book[]>(sliderData.slice(1));

  const changeNextSlide = () => {
    setCurrentSlide(upNextSlides[0]);
    setUpNextSlides([...upNextSlides.slice(1), currentSlide]);
  };

  const changePrevSlide = () => {
    const lastSlide = upNextSlides.at(-1);
    if (lastSlide) {
      setCurrentSlide(lastSlide);
    }
    setUpNextSlides([currentSlide, ...upNextSlides.slice(0, -1)]);
  };

  const setActiveSlide = (slide: Book) => {
    const arr = [currentSlide, ...upNextSlides];
    const index = arr.findIndex((s) => s.id === slide.id);

    setUpNextSlides([...arr.slice(index + 1), ...arr.slice(0, index)]);
    setCurrentSlide(slide);
  };

  const firstThreeSlides = useMemo(
    () => upNextSlides.slice(0, 3),
    [upNextSlides]
  );

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
