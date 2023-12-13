
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { kurta } from '../../../faker/kurta/Kurta';
import HomeSectionCard from './HomeSectionCard';
import "./HomeSectionCard.scss"
import { useState } from 'react';


export const HomeSectionCardCarousel = () => {

    const responsive = {
        0: { items: 2 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const [activeIndex, setActiveIndex] = useState(0)
    
    // const syncActiveIndex = ({ item }) => setActiveIndex(item)

    const syncActiveIndexForSwipeGestures = (e) => setActiveIndex(e.item);

    const onSlideChanged = (e) => {
        syncActiveIndexForSwipeGestures(e);
  
    };

    const items = kurta.map((item, index) =>

        <HomeSectionCard image={item.image} name={item.name} price={item.price} key={index} />

    )

    return (

        <div className="home-card-carousel ">
            <div className="relative p-5 ">
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={onSlideChanged}
                    activeIndex={activeIndex}
        
                />
               

            </div>
        </div>
    )

};