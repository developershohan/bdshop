
import HomeSectionCard from '../../components/HomeSectionCard/HomeSectionCard'
import { HomeSectionCardCarousel } from '../../components/HomeSectionCard/HomeSectionCardCarousel'
import { MainCarousel } from '../../components/MainCarousel/MainCarousel'

const Home = () => {
  return (
    <div>
        
        <MainCarousel/>
        <HomeSectionCardCarousel/>
    </div>
  )
}

export default Home