import { useSliderData } from '../../hooks/useSliderData';
import { Carousel } from '../Carousel/Carousel';
import { UpNext } from '../UpNext/UpNext';

export const CarouselPanel = () => {
  const { currentSlide, firstThreeSlides, setActiveSlide, changeSlide } =
    useSliderData();

  return (
    <section className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row md:items-stretch lg:gap-16">
      <Carousel mainSlide={currentSlide} changeSlide={changeSlide} />
      <UpNext upNextSlides={firstThreeSlides} setActiveSlide={setActiveSlide} />
    </section>
  );
};
