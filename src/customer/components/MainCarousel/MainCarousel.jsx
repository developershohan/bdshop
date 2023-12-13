
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';


export const MainCarousel = () => {

    const items = MainCarouselData.map((item) => <img src={item.image} className=' cursor-pointer ' alt="" />)

    return (

        <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            disableButtonsControls
            autoPlayInterval={3000}
            autoPlaySpeed={1000}
            infinite


        />
    )

};