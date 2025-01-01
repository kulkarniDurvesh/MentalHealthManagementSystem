import Slider from './Slider';
import Cards from './Cards';
import Footer from './Footer/Footer';
import Doctors from './Doctors';



function Home() {
  return (
    <div>
      <Slider />
      <br></br>
      <br></br>
      <h1 align="center" className='text-light'>Our Services</h1>
      <Cards />
      <br></br>
      <br></br>
      <h1 align="center"className='text-light'>Our Teams</h1>
      <Doctors />
    </div>
  )
}

export default Home;
