import { Carousel } from '@mantine/carousel';
import CarouseItem from './CarouselItem';

export default function CarouselCst() {
  return (
    <div className="max-w-full">
      <Carousel
        slideSize="33.333333%"
        mx="auto"
        withIndicators
        height="100%"
        slideGap="sm"
        align="start">
        <Carousel.Slide ml="60px"><CarouseItem /></Carousel.Slide>
        <Carousel.Slide><CarouseItem /></Carousel.Slide>
        <Carousel.Slide><CarouseItem /></Carousel.Slide>
        <Carousel.Slide><CarouseItem /></Carousel.Slide>
        <Carousel.Slide><CarouseItem /></Carousel.Slide>
        <Carousel.Slide><CarouseItem /></Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </div>

  );
}