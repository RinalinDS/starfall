import { useSliderData } from '../../hooks/useSliderData';
import { Carousel } from '../Carousel/Carousel';
import { UpNext } from '../UpNext/UpNext';

export const CarouselPanel = () => {
  const { currentSlide, firstThreeSlides, setActiveSlide, changeSlide } =
    useSliderData();

  return (
    <section className="grid grid-cols-1 justify-items-center gap-6 px-8 py-8 lg:grid-cols-[3fr_2fr] lg:gap-12 2xl:px-0">
      <Carousel mainSlide={currentSlide} changeSlide={changeSlide} />
      <UpNext upNextSlides={firstThreeSlides} setActiveSlide={setActiveSlide} />
    </section>
  );
};
