import { styled } from 'styled-components';
import { Carousel } from './Carousel/Carousel';
import { UpNext } from './UpNext/UpNext';
import { Book, sliderData } from '../mocks/sliderData.mock';
import { useState } from 'react';

export const MainContent = () => {
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

  return (
    <Container>
      <Carousel
        key={currentSlide.id}
        mainSlide={currentSlide}
        changeNextSlide={changeNextSlide}
        changePrevSlide={changePrevSlide}
      />
      <UpNext upNextSlides={upNextSlides} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  height: 48rem;
`;
