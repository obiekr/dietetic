import { Carousel } from '@mantine/carousel';
import CarouseItem from './CarouselItem';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';
import { useEffect, useState } from 'react';

export default function CarouselCst() {
	const [plan, setPlan] = useState([])
  
  useEffect(() => {
    const generated = JSON.parse(localStorage.getItem("plan"))
    if (generated !== null) {
      setPlan(generated)
      console.log("plan generated", generated)
    }
  }, [])

  const date = new Date()
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  var carouselItemArr = []


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

        {plan.length > 0 ?
          carouselItemArr.map((e, i) => {
            return (
              <Carousel.Slide ml="" key={i}><CarouseItem date={e} planItem={plan[i]} index={i}/></Carousel.Slide>
            )
          })
          :
          <></>
        }

        {/* ...other slides */}
      </Carousel>
    </div>

  );
}