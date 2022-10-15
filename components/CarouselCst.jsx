import { Carousel } from '@mantine/carousel';
import CarouseItem from './CarouselItem';
import { getCalendar } from '@skolacode/calendar-js'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';

export default function CarouselCst() {
  const date = new Date()
  // const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  // console.log(firstDay.getDay());
  var carouselItemArr = []

  console.log(lastDay)

  for (let i = date.getDate(); i < (date.getDate() + 7 > lastDay ? lastDay : date.getDate() + 7); i++) {
    carouselItemArr.push(new Date(date.getFullYear(), date.getMonth(), i))
  }
  if (date.getDate() + 7 > lastDay) {
    for (let i = 1; i < lastDay - date.getDate(); i++) {
      carouselItemArr.push(new Date(date.getFullYear(), date.getMonth() + 1, i))
    }
  }

  return (
    <div className="max-w-full ml-6">
      <Carousel
        slideSize="10%"
        ml="auto"
        controlSize={60}
        height="100%"
        slideGap="xl"
        align="start"
        nextControlIcon={<IconArrowRight />}
        previousControlIcon={<IconArrowLeft />}
        >

        {
          carouselItemArr.map((e, i) => {
            return (
              <Carousel.Slide ml="" key={i}><CarouseItem date={e} /></Carousel.Slide>
            )
          })
        }

        {/* ...other slides */}
      </Carousel>
    </div>

  );
}