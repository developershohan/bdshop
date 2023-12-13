
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { kurta } from '../../../faker/kurta/Kurta';
import HomeSectionCard from './HomeSectionCard';

const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
};


export const HomeSectionCardCarousel = () => {

    const items = kurta.map((item, index) =>

        <HomeSectionCard image={item.image} name={item.name} price={item.price} key={index}/>

    )

    return (

        <div className="relative px-5 lg:px-3">
            <div className="relative p-5">
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                />
            </div>
        </div>
    )

};