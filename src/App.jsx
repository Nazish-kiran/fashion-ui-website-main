
import './App.css'
import Categories from './components/Categories'
import Collection from './components/Collection'
import ComfortStyleSection from './components/ComfortStyleSection'
import DiscountBanner from './components/DiscountBanner'
import EverydayLooks from './components/EverydayLooks'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SecondaryNavbar from './components/SecondaryNavbar'
import WinterSaleBanner from './components/WinterSalesBanner'

function App() {

  return (
    <>
      <Navbar/>
      <div className='hidden lg:block'>

      <SecondaryNavbar/>
      </div>
      <Hero/>
      <Collection/>
      <EverydayLooks/>
      <Categories/>
      <DiscountBanner/>
      <ComfortStyleSection/>
      <WinterSaleBanner/>
      <Footer/>
    </>
  )
}

export default App
