import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ExploreAndTravel from './components/ExploreAndTravel';
import ExploreTheWorld from './components/ExploreTheWorld';
import GuidesThousandSunny from './components/GuidesThousandSunny';
import Testimonials from './components/Testimonials';
import FeaturedDestinations from './components/FeaturedDestinations';
import Footer from './components/Footer';
import TrendingStories from './components/TrendingStories';
import './i18n'; 

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreAndTravel/>
      <ExploreTheWorld/>
      <FeaturedDestinations/>
      <GuidesThousandSunny/>
      <Testimonials/>
      <TrendingStories/>
      <Footer/>
    </div>
  );
}

export default App;