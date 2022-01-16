import Navbar from '../components/header';
import Hero from '../components/hero';
import Types from '../components/apartmentTypes';
import AptPlans from '../components/aptPlans';
import Footer from '../components/footer';
import Features from '../components/apartmentFeatures';


function Home(){
  return(
    <>

    <Navbar />
    <Hero />
    <Types />

    <AptPlans />
    <Features />
    <Footer />
    </>
  )
}

export default Home;